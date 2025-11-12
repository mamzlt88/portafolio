import React, { useEffect, useState } from "react";
import { DecryptedText } from "../ui/DecryptedText";
import { RotatingDecryptedText } from "../ui/RotatingDecryptedText";
import ClothingHueCanvas from "../ui/ClothingHueCanvas";
import ClothingOverlaySequence from "../ui/ClothingOverlaySequence";
import { motion } from "motion/react";
// Clothing overlay PNGs (transparent)
import imgClothBlue from "../../assets/clothing/mm_color_Blue.png";
import imgClothGray from "../../assets/clothing/mm_color_Gray.png";
import imgClothPink from "../../assets/clothing/mm_color_pink.png";
import imgClothPurple from "../../assets/clothing/mm_color_purple.png";
import imgClothYellow from "../../assets/clothing/mm_color_yellow.png";
import imgMmColorOrange from "figma:asset/717c32ec589970e1b541c572864d2fa741828374.png";

interface LandingProps {
  onAbout?: () => void;
  onProjects?: () => void;
}

export default function Landing({ onAbout, onProjects }: LandingProps) {
  const [mounted, setMounted] = useState(false);
  const [takeover, setTakeover] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // Handlers to coordinate background takeover and external navigation
  const handleProjects = React.useCallback(() => {
    setTakeover(true);
    // Small delay to allow the takeover animation to start before opening Projects
    window.setTimeout(() => {
      onProjects?.();
    }, 300);
  }, [onProjects]);

  const handleAbout = React.useCallback(() => {
    setTakeover(true);
    // Small delay to allow the takeover animation to start before opening About
    window.setTimeout(() => {
      onAbout?.();
    }, 300);
  }, [onAbout]);
  return (
    <div className="relative bg-[#6b34a2] min-h-screen grid place-items-center px-[clamp(12px,3vw,40px)] py-[clamp(12px,3vw,40px)] overflow-x-hidden" data-name="Landing">
      {/* Full-screen takeover background (fades in when opening Projects) */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: takeover ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "linear" }}
        style={{ backgroundColor: "#161616", pointerEvents: "none" }}
        aria-hidden
      />

      {/* Stage keeps a constant aspect so tiles scale with width */}
      <div className="relative mx-auto w-full max-w-[420px] md:max-w-none h-auto max-h-[calc(100vh-96px)] md:max-h-[calc(100vh-120px)] [aspect-ratio:640/1038] md:[aspect-ratio:1648/1037] overflow-hidden rounded-[32px] md:rounded-[40px]">
        {/* Background color grid (visual layer) - animated with Motion */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-4 gap-[10px] sm:gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px]">
          {/* Yellow 1 */}
          <motion.div
            className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
            initial={{ backgroundColor: "#f3f9ae" }}
            animate={{ backgroundColor: takeover ? ["#161616"] : ["#f3f9ae", "#e1f40b", "#fbfde2", "#f3f9ae"] }}
            transition={takeover ? { duration: 0.3, ease: "linear" } : { duration: 11, repeat: Infinity, ease: "linear", delay: 2 }}
          />

          {/* Purple 1 */}
          <motion.div
            className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
            initial={{ backgroundColor: "#ddccef" }}
            animate={{ backgroundColor: takeover ? ["#161616"] : ["#ddccef", "#a456f3", "#8923ee", "#ddccef"] }}
            transition={takeover ? { duration: 0.3, ease: "linear" } : { duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
          />

          {/* Purple 2 */}
          <motion.div
            className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
            initial={{ backgroundColor: "#8923ee" }}
            animate={{ backgroundColor: takeover ? ["#161616"] : ["#8923ee", "#a456f3", "#600fb2", "#8923ee"] }}
            transition={takeover ? { duration: 0.3, ease: "linear" } : { duration: 14, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />

          {/* Green 1 */}
          <motion.div
            className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
            initial={{ backgroundColor: "#a4b200" }}
            animate={{ backgroundColor: takeover ? ["#161616"] : ["#a4b200", "#636b00", "#a4b200"] }}
            transition={takeover ? { duration: 0.3, ease: "linear" } : { duration: 13, repeat: Infinity, ease: "linear", delay: 3 }}
          />

          {/* Black/Green */}
          <motion.div
            className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
            initial={{ backgroundColor: "#161616" }}
            animate={{ backgroundColor: takeover ? ["#161616"] : ["#161616", "#636b00", "#161616"] }}
            transition={takeover ? { duration: 0.3, ease: "linear" } : { duration: 16, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />

          {/* Gray */}
          <motion.div
            className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
            initial={{ backgroundColor: "#B4B4B4" }}
            animate={{ backgroundColor: takeover ? ["#161616"] : ["#B4B4B4", "#929292", "#161616", "#B4B4B4"] }}
            transition={takeover ? { duration: 0.3, ease: "linear" } : { duration: 15, repeat: Infinity, ease: "linear", delay: 2.5 }}
          />

          {/* Green 1 (variant to fill 7th cell) */}
          <motion.div
            className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
            initial={{ backgroundColor: "#636b00" }}
            animate={{ backgroundColor: takeover ? ["#161616"] : ["#a4b200", "#636b00", "#a4b200"] }}
            transition={takeover ? { duration: 0.3, ease: "linear" } : { duration: 12, repeat: Infinity, ease: "linear", delay: 3.2 }}
          />

          {/* Yellow 2 */}
          <motion.div
            className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
            initial={{ backgroundColor: "#e1f40b" }}
            animate={{ backgroundColor: takeover ? ["#161616"] : ["#e1f40b", "#f3f9ae", "#a4b200", "#e1f40b"] }}
            transition={takeover ? { duration: 0.3, ease: "linear" } : { duration: 9, repeat: Infinity, ease: "linear", delay: 3.5 }}
          />
        </div>

        {/* Clickable overlay grid (interaction layer) */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 gap-[10px] sm:gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] z-10">
          {/* Projects (row 1, col 1) */}
          <button
            onClick={handleProjects}
            aria-label="Projects"
            className="group relative z-10 rounded-[clamp(16px,3vw,40px)] text-left cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-black/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/30 active:scale-[0.99]"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className="pointer-events-none absolute left-[14px] sm:left-[18px] md:left-[24px] top-[14px] sm:top-[18px] md:top-[24px] flex items-center gap-[8px]">
              <p className="font-['DM_Mono',_monospace] text-[14px] sm:text-[14px] md:text-[16px] leading-[24px] uppercase text-black">Projects</p>
              <svg className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          {/* Empty cell (row 1, col 2) */}
          <div />

          {/* Empty cell (row 2, col 1) */}
          <div />

          {/* Row 2, Col 2 (bg-[#a4b200]) — rotating decrypted titles */}
          <div className="[grid-area:2_/_2] flex items-center justify-center relative z-10">
            <RotatingDecryptedText
              words={["Artist", "DogMom", "Dancer", "Astrologer"]}
              className="pointer-events-none font-['Poppins',_sans-serif] font-semibold text-white leading-[0.95] text-[min(8vw,132px)] tracking-[-0.02em]"
              displayMs={5000}
              fadeMs={275}
              startDelayMs={100}
            />
          </div>

          {/* Row 3, Col 1 (bg-black) — rotating decrypted titles */}
          <div className="[grid-area:3_/_1] flex items-center justify-center relative z-10">
            <RotatingDecryptedText
              words={["Designer", "Product", "Manager", "Visual", "Experience"]}
              className="pointer-events-none font-['Poppins',_sans-serif] font-semibold text-white leading-[0.95] text-[min(8vw,132px)] tracking-[-0.02em]"
              displayMs={5000}
              fadeMs={275}
              startDelayMs={100}
            />
          </div>

          {/* Empty cell (row 3, col 2) — headline handled by overlay */}
          <div />

          {/* Empty cell (row 4, col 1) */}
          <div />

          {/* About Me (row 4, col 2) */}
          <button
            onClick={handleAbout}
            aria-label="About Me"
            className="group relative z-10 rounded-[clamp(16px,3vw,40px)] text-right cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-black/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/30 active:scale-[0.99]"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className="pointer-events-none absolute right-[14px] sm:right-[18px] md:right-[24px] bottom-[14px] sm:bottom-[18px] md:bottom-[24px] flex items-center gap-[8px] justify-end">
              <p className="font-['DM_Mono',_monospace] text-[14px] sm:text-[14px] md:text-[16px] leading-[24px] uppercase text-black">About Me</p>
              <svg className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Model centered OVER the tiles (aligned to the stage) */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center z-20" aria-hidden>
          <div
            className="relative transition-all duration-700 ease-out min-w-[120px] max-w-[420px] max-h-[85%] md:max-h-[85%] lg:max-h-[85%] h-[72%] w-auto sm:h-[72%] sm:w-auto md:h-auto md:w-[28%] lg:w-[40%] xl:w-[41%] translate-y-0 md:translate-y-0 lg:translate-y-0 xl:translate-y-0"
            style={{ aspectRatio: '640 / 1038', opacity: mounted ? 1 : 0 }}
          >
            {/* Base Model */}
            <img
              alt=""
              src={imgMmColorOrange}
              className="absolute inset-0 object-contain w-full h-full"
            />

            {/* Clothing Overlay Sequence (expects transparent PNGs in public/) */}
            <ClothingOverlaySequence
              className="absolute inset-0 w-full h-full"
              stepDurationMs={10000}
              fadeMs={700}
              autoPlay
              hueRotate={false}
              objectFit="contain"
              sources={[
                imgClothPink,
                imgClothYellow,
                imgClothGray,
                imgClothPurple,
                imgClothBlue,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Headline handled inside specific tiles; no global overlay */}
    </div>
  );
}
