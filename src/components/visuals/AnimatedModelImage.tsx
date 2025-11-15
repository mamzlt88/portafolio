import imgMmColorOrange from "figma:asset/717c32ec589970e1b541c572864d2fa741828374.png";
import imgMmColorFucsia from "figma:asset/5e760d0b1b85f18ad77bddef113b51317f7606e7.png";
import imgMmColorYellow from "figma:asset/2625cb3e78dcd7941cfcac6145a7513622c7d7df.png";
import imgMmColorBlue from "figma:asset/137be2bd84d4f01382e0ca4158dde3d16b96eb35.png";
import imgMmColorPurple from "figma:asset/5b55f5770f8be828c1d0e85f5e2e5d84e786bb07.png";
import imgMmColorGray from "figma:asset/c58e5afa678b5fd3954515802a4cf1ff79d68266.png";
import { useState, useEffect, useRef } from "react";

export default function AnimatedModelImage(
  { pausedInitialMs = 0, cycle = true, initialIndex = 0 }:
  { pausedInitialMs?: number; cycle?: boolean; initialIndex?: number }
) {
  const colorImages = [
    imgMmColorOrange, 
    imgMmColorFucsia, 
    imgMmColorYellow, 
    imgMmColorBlue, 
    imgMmColorPurple,
    imgMmColorGray
  ];

  const [stableImageIndex, setStableImageIndex] = useState(initialIndex);
  const [isFading, setIsFading] = useState(false);
  const [paused, setPaused] = useState(pausedInitialMs > 0);
  const intervalRef = useRef<number | null>(null);

  // Release the pause after a short delay if requested
  useEffect(() => {
    if (pausedInitialMs <= 0) return;
    const t = window.setTimeout(() => setPaused(false), pausedInitialMs);
    return () => window.clearTimeout(t);
  }, [pausedInitialMs]);

  useEffect(() => {
    if (paused || !cycle) return;
    // Clear any previous interval
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    // Every 5s: fade out, swap src, fade in — single image only
    intervalRef.current = window.setInterval(() => {
      setIsFading(true);
      // Wait for fade-out, then swap and fade-in
      window.setTimeout(() => {
        setStableImageIndex((prev) => (prev + 1) % colorImages.length);
        setIsFading(false);
      }, 250);
    }, 5000) as unknown as number;
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused, colorImages.length, cycle]);

  return (
    <div className="relative size-full">
      {/* Color layers */}
      <div className="absolute h-[1038px] left-0 top-0 w-[640px]">
        <img
          alt=""
          className="absolute inset-0 object-center object-contain pointer-events-none size-full"
          src={colorImages[stableImageIndex]}
          style={{
            opacity: isFading ? 0 : 1,
            transition: 'opacity 250ms ease-in-out',
          }}
        />
      </div>
    </div>
  );
}
