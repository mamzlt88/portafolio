import React, { useEffect, useState } from "react";
import imgSombra1 from "figma:asset/1cbc4e6eb83416656dd6543f41c9cece5a3314fe.png";
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
    <div className="relative bg-[#6b34a2] w-full min-h-screen p-[clamp(16px,4vw,40px)]" data-name="Landing">
      {/* Stage keeps a constant aspect so tiles scale with width */}
      <div className="relative w-full mx-auto [aspect-ratio:420/972] md:[aspect-ratio:1648/1037]">
        {/* Background color grid (visual layer) */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-4 gap-[clamp(6px,2vw,14px)]">
          <div className="bg-[#f3f9ae] rounded-[clamp(20px,4vw,40px)]" />
          <div className="bg-[#ddccef] rounded-[clamp(20px,4vw,40px)]" />
          <div className="bg-[#8923ee] rounded-[clamp(20px,4vw,40px)]" />
          <div className="bg-[#a4b200] rounded-[clamp(20px,4vw,40px)]" />
          <div className="bg-black rounded-[clamp(20px,4vw,40px)]" />
          <div className="bg-[#b4b4b4] rounded-[clamp(20px,4vw,40px)]" />
          <div className="bg-[#636b00] rounded-[clamp(20px,4vw,40px)]" />
          <div className="bg-[#e1f40b] rounded-[clamp(20px,4vw,40px)]" />
        </div>

        {/* Clickable overlay grid (interaction layer) */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 gap-[clamp(6px,2vw,14px)] z-10">
          {/* Projects (row 1, col 1) */}
          <button
            onClick={onProjects}
            aria-label="Projects"
            className="group relative z-10 rounded-[clamp(16px,3vw,40px)] text-left cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-black/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/30 active:scale-[0.99]"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className="pointer-events-none absolute left-[clamp(12px,2.5vw,40px)] top-[clamp(12px,2.5vw,40px)] flex items-center gap-[8px]">
              <p className="font-['DM_Mono',_monospace] text-[clamp(14px,1.4vw,16px)] leading-[24px] uppercase text-black">Projects</p>
              <svg className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          {/* Empty cell (row 1, col 2) */}
          <div />

          {/* Empty cell (row 2, col 1) */}
          <div />

          {/* Empty cell (row 2, col 2) */}
          <div />

          {/* Empty cell (row 3, col 1) */}
          <div />

          {/* Empty cell (row 3, col 2) */}
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
            <div className="pointer-events-none absolute right-[clamp(12px,2.5vw,40px)] bottom-[clamp(12px,2.5vw,40px)] flex items-center gap-[8px] justify-end">
              <p className="font-['DM_Mono',_monospace] text-[clamp(14px,1.4vw,16px)] leading-[24px] uppercase text-black">About Me</p>
              <svg className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Model + shadow centered OVER the tiles (aligned to the stage) */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center z-50" aria-hidden>
          <div
            className="relative transition-all duration-700 ease-out"
            style={{
              // Size relative to the stage width; ~24–28% per reference, lift slightly
              width: 'clamp(150px, 24%, 300px)',
              aspectRatio: '640 / 1038',
              opacity: mounted ? 1 : 0,
              transform: 'translateY(-2%)',
            }}
          >
            {/* Shadow behind */}
            <img
              alt=""
              src={imgSombra1}
              className="absolute inset-0 object-contain w-full h-full mix-blend-multiply"
            />
            {/* Model on top */}
            <img
              alt=""
              src={imgMmColorOrange}
              className="absolute inset-0 object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile-only title overlay per reference (centered over model within stage area) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center md:hidden z-[60]" aria-hidden>
        <div className="text-center">
          <p className="font-['Poppins',_sans-serif] font-semibold text-white leading-[0.95] text-[clamp(32px,12vw,56px)]">Artist</p>
          <p className="font-['Poppins',_sans-serif] font-semibold text-white leading-[0.95] text-[clamp(32px,12vw,56px)] mt-[4px]">Designer</p>
        </div>
      </div>
    </div>
  );
}
