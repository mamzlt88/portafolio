import imgMmColorOrange from "figma:asset/717c32ec589970e1b541c572864d2fa741828374.png";
import imgMmColorFucsia from "figma:asset/5e760d0b1b85f18ad77bddef113b51317f7606e7.png";
import imgMmColorYellow from "figma:asset/2625cb3e78dcd7941cfcac6145a7513622c7d7df.png";
import imgMmColorBlue from "figma:asset/137be2bd84d4f01382e0ca4158dde3d16b96eb35.png";
import imgMmColorPurple from "figma:asset/5b55f5770f8be828c1d0e85f5e2e5d84e786bb07.png";
import imgMmColorGray from "figma:asset/c58e5afa678b5fd3954515802a4cf1ff79d68266.png";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function AnimatedModelImage() {
  const colorImages = [
    imgMmColorOrange, 
    imgMmColorFucsia, 
    imgMmColorYellow, 
    imgMmColorBlue, 
    imgMmColorPurple,
    imgMmColorGray
  ];

  const [stableImageIndex, setStableImageIndex] = useState(0);
  const [incomingImageIndex, setIncomingImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIncomingImageIndex((prevStable) => {
        const currentStable = stableImageIndex;
        return (currentStable + 1) % colorImages.length;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [stableImageIndex, colorImages.length]);

  const handleAnimationComplete = () => {
    if (incomingImageIndex !== null) {
      setStableImageIndex(incomingImageIndex);
      setIncomingImageIndex(null);
    }
  };

  return (
    <div className="relative size-full">
      {/* Color layers */}
      <div className="absolute h-[1038px] left-0 top-0 w-[640px]">
        {/* Stable base layer - always at 100% opacity */}
        <div className="absolute inset-0">
          <img 
            alt="" 
            className="absolute inset-0 object-center object-contain pointer-events-none size-full" 
            src={colorImages[stableImageIndex]} 
          />
        </div>
        
        {/* Incoming layer - fades in from 0% to 100% */}
        {incomingImageIndex !== null && (
          <motion.div
            key={incomingImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
            onAnimationComplete={handleAnimationComplete}
            className="absolute inset-0"
          >
            <img 
              alt="" 
              className="absolute inset-0 object-center object-contain pointer-events-none size-full" 
              src={colorImages[incomingImageIndex]} 
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
