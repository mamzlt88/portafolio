import React from "react";
import imgSombra1 from "figma:asset/1cbc4e6eb83416656dd6543f41c9cece5a3314fe.png";
import imgMmColorOrange from "figma:asset/717c32ec589970e1b541c572864d2fa741828374.png";

interface LandingProps {
  onAbout?: () => void;
  onProjects?: () => void;
}

export default function Landing({ onAbout, onProjects }: LandingProps) {
  return (
    <div className="bg-[#6b34a2] box-border gap-[24px] grid grid-cols-2 grid-rows-4 relative h-full w-full p-[40px]" data-name="Landing">
      {/* Background color blocks layer */}
      <div className="absolute gap-[24px] grid grid-cols-2 grid-rows-4 h-[1037px] left-[40px] top-[40px] w-[1648px] pointer-events-none">
        <div className="bg-[#f3f9ae] rounded-[40px] shrink-0" />
        <div className="bg-[#ddccef] rounded-[40px] shrink-0" />
        <div className="bg-[#8923ee] rounded-[40px] shrink-0" />
        <div className="bg-[#a4b200] rounded-[40px] shrink-0" />
        <div className="bg-black rounded-[40px] shrink-0" />
        <div className="bg-[#b4b4b4] rounded-[40px] shrink-0" />
        <div className="bg-[#636b00] rounded-[40px] shrink-0" />
        <div className="bg-[#e1f40b] rounded-[40px] shrink-0" />
      </div>

      {/* Center shadow image */}
      <div className="absolute bottom-[27px] left-1/2 -translate-x-1/2 h-[1067px] w-[658px]" aria-hidden>
        <img alt="" className="absolute inset-0 max-w-none mix-blend-multiply object-cover pointer-events-none size-full" src={imgSombra1} />
      </div>

      {/* Foreground model image */}
      <div className="absolute left-[50%] top-[57px] -translate-x-1/2 h-[1038px] w-[640px] pointer-events-none select-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMmColorOrange} />
      </div>

      {/* About tile clickable overlay (top-left) */}
      <button
        onClick={onAbout}
        aria-label="About Me"
        className="[grid-area:1_/_1] relative z-20 rounded-[40px] text-left cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-black/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/30 active:scale-[0.99]"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div className="pointer-events-none absolute left-[40px] top-[40px]">
          <p className="font-['DM_Mono',_monospace] text-[16px] leading-[24px] uppercase text-black">About Me</p>
        </div>
        <span className="sr-only">Open About Me</span>
      </button>

      <div className="[grid-area:3_/_1] flex items-center justify-center relative z-10">
        <p className="font-['Poppins',_sans-serif] font-semibold text-white" style={{ fontSize: 'clamp(2.375rem, 8vw, 8.375rem)', letterSpacing: '-0.02em' }}>
          Designer
        </p>
      </div>

      <div className="[grid-area:2_/_2] flex items-center justify-center relative z-10">
        <p className="font-['Poppins',_sans-serif] font-semibold text-white" style={{ fontSize: 'clamp(2.375rem, 8vw, 8.375rem)', letterSpacing: '-0.02em' }}>
          Artist
        </p>
      </div>

      {/* Projects tile clickable overlay (bottom-right) */}
      <button
        onClick={onProjects}
        aria-label="Projects"
        className="[grid-area:4_/_2] relative z-20 rounded-[40px] text-right cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-black/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/30 active:scale-[0.99]"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div className="pointer-events-none absolute right-[40px] bottom-[40px]">
          <p className="font-['DM_Mono',_monospace] text-[16px] leading-[24px] uppercase text-black">My Projects</p>
        </div>
        <span className="sr-only">Open Projects</span>
      </button>
    </div>
  );
}
