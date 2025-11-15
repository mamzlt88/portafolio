import React from "react";

interface ClothingOverlaySequenceProps {
  // Absolute or public/ relative paths to transparent clothing PNGs
  sources: string[];
  className?: string; // should be absolute inset-0 w-full h-full from parent
  // Crossfade duration for one image to the next
  stepDurationMs?: number; // default 5000ms per color
  fadeMs?: number; // default 600ms
  // Optional: animate hue only on the clothing overlays
  hueRotate?: boolean; // default false
  hueCycleMs?: number; // default 4000ms
  hueFromDeg?: number; // default 0
  hueToDeg?: number; // default 360
  // Optional extra color controls applied alongside hue rotation
  saturate?: number; // e.g., 1 = 100%
  brightness?: number; // e.g., 1 = 100%
  // Control playback and fit
  autoPlay?: boolean; // default true
  objectFit?: 'contain' | 'cover'; // default 'contain'
  // Notify parent of active overlay index for handoff to About
  onActiveChange?: (index: number) => void;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export const ClothingOverlaySequence: React.FC<ClothingOverlaySequenceProps> = ({
  sources,
  className,
  stepDurationMs = 5000,
  fadeMs = 600,
  hueRotate = false,
  hueCycleMs = 4000,
  hueFromDeg = 0,
  hueToDeg = 360,
  saturate = 1,
  brightness = 1,
  autoPlay = true,
  objectFit = 'contain',
  onActiveChange,
}) => {
  const reduced = usePrefersReducedMotion();
  const [loaded, setLoaded] = React.useState<boolean[]>(Array(sources.length).fill(false));
  const [active, setActive] = React.useState(0);
  const uid = React.useId();
  const animName = React.useMemo(
    () => `hueRotate_${String(uid).replace(/[:]/g, "_")}`,
    [uid]
  );

  // Preload tracking
  React.useEffect(() => {
    const states = Array(sources.length).fill(false);
    let cancelled = false;
    sources.forEach((src, i) => {
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        states[i] = true;
        setLoaded((prev) => {
          const next = prev.slice();
          next[i] = true;
          return next;
        });
      };
      img.onerror = () => {
        if (cancelled) return;
        states[i] = false;
      };
      img.src = src;
    });
    return () => { cancelled = true; };
  }, [sources]);

  // Advance index
  React.useEffect(() => {
    if (reduced || !autoPlay) return; // keep first loaded frame
    const n = sources.length;
    if (n === 0) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, stepDurationMs);
    return () => window.clearInterval(id);
  }, [sources.length, stepDurationMs, reduced, autoPlay]);

  // Notify parent whenever the active overlay changes (including initial)
  React.useEffect(() => {
    if (typeof onActiveChange === 'function') {
      onActiveChange(active);
    }
  }, [active, onActiveChange]);

  if (!sources || sources.length === 0) return null;

  return (
    <div className={className} aria-hidden>
      {/* Scoped keyframes for hue rotation if enabled */}
      {hueRotate && (
        <style>
          {`@keyframes ${animName} {
            0% { filter: hue-rotate(${hueFromDeg}deg) saturate(${saturate}) brightness(${brightness}); }
            100% { filter: hue-rotate(${hueToDeg}deg) saturate(${saturate}) brightness(${brightness}); }
          }`}
        </style>
      )}
      {/* Stack all overlays and crossfade */}
      {sources.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden
          role="presentation"
          className={`absolute inset-0 w-full h-full object-${objectFit} pointer-events-none`}
          style={{
            opacity: loaded[i] && (!reduced ? (i === active ? 1 : 0) : i === 0 ? 1 : 0),
            transition: `opacity ${fadeMs}ms ease`,
            animation: hueRotate
              ? `${animName} ${hueCycleMs}ms linear infinite` // full cycle
              : undefined,
            willChange: 'opacity, filter',
          }}
        />
      ))}
    </div>
  );
};

export default ClothingOverlaySequence;
