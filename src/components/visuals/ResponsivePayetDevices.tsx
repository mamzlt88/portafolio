import React, { useEffect, useState, useRef } from "react";
import PayetDevicesComponent from "../imports/1-81-34";

export default function ResponsivePayetDevices() {
  const [scale, setScale] = useState(1);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, containerWidth: 0, containerHeight: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDebug] = useState(false); // Set to true to see dimensions

  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current) return;

      // Get the actual container dimensions
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      // EXACT dimensions from the Figma import (1-81-34.tsx, line 67)
      // This is the actual size of the "theming" div with all devices
      const originalWidth = 839;
      const originalHeight = 633;

      // Add some padding for breathing room
      const padding = 40;
      const availableWidth = containerWidth - padding;
      const availableHeight = containerHeight - padding;

      // Calculate scale to fit both width and height
      const scaleWidth = availableWidth / originalWidth;
      const scaleHeight = availableHeight / originalHeight;

      // Use the smaller scale to ensure it fits completely
      const newScale = Math.min(scaleWidth, scaleHeight, 1);

      setScale(newScale);
      setDimensions({
        width: originalWidth,
        height: originalHeight,
        containerWidth,
        containerHeight
      });
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);

    // Use ResizeObserver for more accurate container size changes
    const resizeObserver = new ResizeObserver(calculateScale);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", calculateScale);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden relative">
      {/* Debug info - toggle showDebug to true to see */}
      {showDebug && (
        <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50 font-mono">
          <div>Container: {dimensions.containerWidth}x{dimensions.containerHeight}px</div>
          <div>Original: {dimensions.width}x{dimensions.height}px</div>
          <div>Scale: {scale.toFixed(3)}</div>
          <div>Scaled: {Math.round(dimensions.width * scale)}x{Math.round(dimensions.height * scale)}px</div>
        </div>
      )}
      
      <div 
        className="transition-transform duration-300 ease-out"
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
        <PayetDevicesComponent />
      </div>
    </div>
  );
}
