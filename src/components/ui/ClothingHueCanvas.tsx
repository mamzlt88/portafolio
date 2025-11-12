import React from "react";

interface ClothingHueCanvasProps {
  src: string;
  className?: string;
  // Degrees to sweep across full cycle duration
  cycleDurationMs?: number; // default 10000ms
  // Hue range detection config (degrees in [0,360))
  targetHue?: number; // default 28 (orange)
  hueTolerance?: number; // default 20
  minSaturation?: number; // 0..1 default 0.35
  maxSaturation?: number; // 0..1 default 1
  minLightness?: number; // 0..1 default 0.15
  maxLightness?: number; // 0..1 default 0.85
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s, l];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h = ((h % 360) + 360) % 360; // wrap
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r1 = 0, g1 = 0, b1 = 0;
  if (0 <= hp && hp < 1) { r1 = c; g1 = x; }
  else if (1 <= hp && hp < 2) { r1 = x; g1 = c; }
  else if (2 <= hp && hp < 3) { g1 = c; b1 = x; }
  else if (3 <= hp && hp < 4) { g1 = x; b1 = c; }
  else if (4 <= hp && hp < 5) { r1 = x; b1 = c; }
  else if (5 <= hp && hp < 6) { r1 = c; b1 = x; }
  const m = l - c / 2;
  const r = Math.round((r1 + m) * 255);
  const g = Math.round((g1 + m) * 255);
  const b = Math.round((b1 + m) * 255);
  return [r, g, b];
}

function hueDistance(a: number, b: number): number {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

const ClothingHueCanvas: React.FC<ClothingHueCanvasProps> = ({
  src,
  className,
  cycleDurationMs = 10000,
  targetHue = 28,
  hueTolerance = 20,
  minSaturation = 0.35,
  maxSaturation = 1,
  minLightness = 0.15,
  maxLightness = 0.85,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const [ready, setReady] = React.useState(false);

  // load image
  React.useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // in case
    img.src = src;
    img.onload = () => {
      imgRef.current = img;
      setReady(true);
    };
    img.onerror = () => setReady(false);
    return () => { imgRef.current = null; };
  }, [src]);

  // resize canvas to container and draw with object-contain
  const layoutAndDraw = React.useCallback((hueShiftDeg: number) => {
    const canvas = canvasRef.current;
    const wrap = containerRef.current;
    const img = imgRef.current;
    if (!canvas || !wrap || !img) return;

    const w = Math.max(1, Math.floor(wrap.clientWidth));
    const h = Math.max(1, Math.floor(wrap.clientHeight));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // compute contain sizing
    const iw = img.width, ih = img.height;
    const scale = Math.min(w / iw, h / ih);
    const dw = Math.floor(iw * scale);
    const dh = Math.floor(ih * scale);
    const dx = Math.floor((w - dw) / 2);
    const dy = Math.floor((h - dh) / 2);

    // draw base image first
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, dx, dy, dw, dh);

    // get pixels and modify only clothing hue range
    const imageData = ctx.getImageData(dx, dy, dw, dh);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
      if (a === 0) continue; // transparent
      const [hue, sat, light] = rgbToHsl(r, g, b);
      if (
        hueDistance(hue, targetHue) <= hueTolerance &&
        sat >= minSaturation && sat <= maxSaturation &&
        light >= minLightness && light <= maxLightness
      ) {
        const [nr, ng, nb] = hslToRgb(hue + hueShiftDeg, sat, light);
        data[i] = nr; data[i + 1] = ng; data[i + 2] = nb;
      } else {
        // leave untouched
      }
    }

    ctx.putImageData(imageData, dx, dy);
  }, [targetHue, hueTolerance, minSaturation, maxSaturation, minLightness, maxLightness]);

  React.useEffect(() => {
    if (!ready) return;
    let raf = 0;
    let start = 0;

    const tick = (t: number) => {
      if (!start) start = t;
      const elapsed = t - start;
      const cycle = Math.max(1000, cycleDurationMs);
      const progress = (elapsed % cycle) / cycle; // 0..1
      const hueShift = progress * 360; // full rotation
      layoutAndDraw(reduced ? 0 : hueShift);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready, cycleDurationMs, layoutAndDraw, reduced]);

  // redraw on container resize
  React.useEffect(() => {
    const wrap = containerRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => layoutAndDraw(0));
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [layoutAndDraw]);

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ClothingHueCanvas;
