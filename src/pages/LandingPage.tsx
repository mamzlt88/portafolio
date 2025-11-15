import React, { useEffect } from 'react';
import Landing from '../components/sections/Landing';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
// Prefetch the model color layers used by AnimatedModelImage for smoother first paint on About
import imgMmColorOrange from "figma:asset/717c32ec589970e1b541c572864d2fa741828374.png";
import imgMmColorFucsia from "figma:asset/5e760d0b1b85f18ad77bddef113b51317f7606e7.png";
import imgMmColorYellow from "figma:asset/2625cb3e78dcd7941cfcac6145a7513622c7d7df.png";
import imgMmColorBlue from "figma:asset/137be2bd84d4f01382e0ca4158dde3d16b96eb35.png";
import imgMmColorPurple from "figma:asset/5b55f5770f8be828c1d0e85f5e2e5d84e786bb07.png";
import imgMmColorGray from "figma:asset/c58e5afa678b5fd3954515802a4cf1ff79d68266.png";

export default function LandingPage() {
  const vtNavigate = useViewTransitionNavigate();
  const handleAbout = (opts?: { modelIndex?: number }) =>
    vtNavigate('/about', { state: { modelIndex: opts?.modelIndex } });

  // Prefetch likely-needed images for the About model to reduce transition jank
  useEffect(() => {
    const sources = [
      imgMmColorOrange,
      imgMmColorFucsia,
      imgMmColorYellow,
      imgMmColorBlue,
      imgMmColorPurple,
      imgMmColorGray,
    ];
    sources.forEach((src) => { const i = new Image(); i.src = src; });
  }, []);
  return (
    <Landing
      onAbout={handleAbout}
      activeOverlay={null}
    />
  );
}
