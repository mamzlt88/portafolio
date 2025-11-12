import React, { useEffect, useState } from "react";
import imgMmColorOrange from "figma:asset/717c32ec589970e1b541c572864d2fa741828374.png";

interface LandingProps {
  onAbout?: () => void;
  onProjects?: () => void;
}

export default function Landing({ onAbout, onProjects }: LandingProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  return (
    <div className="relative bg-[#6b34a2] min-h-screen grid place-items-center px-[clamp(12px,3vw,40px)] py-[clamp(12px,3vw,40px)] overflow-x-hidden" data-name="Landing">
      {/* Stage keeps a constant aspect so tiles scale with width */}
      <div className="relative mx-auto w-full max-w-[420px] md:max-w-none h-auto max-h-[calc(100vh-96px)] md:max-h-[calc(100vh-120px)] [aspect-ratio:640/1038] md:[aspect-ratio:1648/1037] overflow-hidden rounded-[32px] md:rounded-[40px]">
        {/* Background color grid (visual layer) */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-4 gap-[10px] sm:gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px]">
          <div className="bg-[#f3f9ae] rounded-[24px] sm:rounded-[32px] md:rounded-[40px]" />
          <div className="bg-[#ddccef] rounded-[24px] sm:rounded-[32px] md:rounded-[40px]" />
          <div className="bg-[#8923ee] rounded-[24px] sm:rounded-[32px] md:rounded-[40px]" />
          <div className="bg-[#a4b200] rounded-[24px] sm:rounded-[32px] md:rounded-[40px]" />
          <div className="bg-black rounded-[24px] sm:rounded-[32px] md:rounded-[40px]" />
          <div className="bg-[#b4b4b4] rounded-[24px] sm:rounded-[32px] md:rounded-[40px]" />
          <div className="bg-[#636b00] rounded-[24px] sm:rounded-[32px] md:rounded-[40px]" />
          <div className="bg-[#e1f40b] rounded-[24px] sm:rounded-[32px] md:rounded-[40px]" />
        </div>

        {/* Clickable overlay grid (interaction layer) */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 gap-[10px] sm:gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] z-10">
          {/* Projects (row 1, col 1) */}
          <button
            onClick={onProjects}
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

          {/* Row 2, Col 2 (bg-[#a4b200]) — centered 'Artist' */}
          <div className="[grid-area:2_/_2] flex items-center justify-center relative z-10">
            <p className="pointer-events-none font-['Poppins',_sans-serif] font-semibold text-white leading-[0.95] text-[min(8vw,132px)] tracking-[-0.02em]">
              Artist
            </p>
          </div>

          {/* Row 3, Col 1 (bg-black) — centered 'Designer' */}
          <div className="[grid-area:3_/_1] flex items-center justify-center relative z-10">
            <p className="pointer-events-none font-['Poppins',_sans-serif] font-semibold text-white leading-[0.95] text-[min(8vw,132px)] tracking-[-0.02em]">
              Designer
            </p>
          </div>

          {/* Empty cell (row 3, col 2) — headline handled by overlay */}
          <div />

          {/* Empty cell (row 4, col 1) */}
          <div />

          {/* About Me (row 4, col 2) */}
          <button
            onClick={onAbout}
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
            {/* Model */}
            <img
              alt=""
              src={imgMmColorOrange}
              className="absolute inset-0 object-contain w-full h-full filter-none drop-shadow-none"
            />
          </div>
        </div>
      </div>

      {/* Headline handled inside specific tiles; no global overlay */}
    </div>
  );
}
