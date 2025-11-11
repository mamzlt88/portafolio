// PortfolioCasestudy.tsx — projects grid overlay; click cards to open a case study
import imgMmColorOrange from "figma:asset/717c32ec589970e1b541c572864d2fa741828374.png";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] md:gap-[8px] items-center justify-end leading-[1.12] relative shrink-0 text-black text-nowrap w-full whitespace-pre">
      <p className="font-['Poltawski_Nowy:Bold',sans-serif] font-bold relative shrink-0 tracking-[-0.04em]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.625rem)' }}>Trading</p>
      <p className="font-['Poppins:SemiBold_Italic',sans-serif] italic relative shrink-0 tracking-[-0.04em]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.75rem)' }}>Automation</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] md:gap-[8px] items-start justify-end leading-[1.12] relative shrink-0 text-black text-nowrap w-full whitespace-pre">
      <p className="font-['Poppins:Regular',sans-serif] not-italic relative shrink-0 tracking-[-0.04em]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.6875rem)' }}>{`Interface `}</p>
      <p className="font-['Poltawski_Nowy:SemiBold_Italic',sans-serif] font-semibold italic relative shrink-0 tracking-[-0.04em]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.625rem)' }}>Redesign</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-end justify-center relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Project({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="[grid-area:2_/_2] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[12px] md:px-[16px] py-[8px] relative overlay-card shrink-0 cursor-pointer" 
      data-name="Project 1"
    >
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] md:gap-[8px] items-center leading-[1.12] relative shrink-0 text-black text-nowrap w-full whitespace-pre">
      <p className="font-['Poltawski_Nowy:Bold',sans-serif] font-bold relative shrink-0 tracking-[-0.04em]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.625rem)' }}>White</p>
      <p className="font-['Poppins:SemiBold_Italic',sans-serif] italic relative shrink-0 tracking-[-0.04em]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.75rem)' }}>Label</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] md:gap-[8px] items-center leading-[1.12] relative shrink-0 text-black text-nowrap w-full whitespace-pre">
      <p className="font-['Poppins:Regular',sans-serif] not-italic relative shrink-0 tracking-[-0.04em]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.6875rem)' }}>{`Payment `}</p>
      <p className="font-['Poltawski_Nowy:SemiBold_Italic',sans-serif] font-semibold italic relative shrink-0 tracking-[-0.04em]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.625rem)' }}>Gateway</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] md:gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['Poppins:SemiBold_Italic',sans-serif] italic leading-[1.12] relative shrink-0 text-black text-nowrap tracking-[-0.04em] whitespace-pre" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.75rem)' }}>Modernization</p>
    </div>
  );
}

function Project1({ onClick }: { onClick: () => void }) {
  return (
    <div className="[grid-area:3_/_1] relative rounded-[16px] md:rounded-[24px] shrink-0" data-name="Project 2">
      <div className="flex flex-col justify-center size-full">
        <div 
          onClick={onClick}
          className="box-border content-stretch flex flex-col gap-[5px] items-start justify-center md:p-[16px] relative size-full overlay-card cursor-pointer px-[22px] py-[16px] py-[51px]"
        >
          <Frame4 />
          <Frame5 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

interface PortfolioCasestudyProps {
  onProjectClick: (projectId: string) => void;
}

export default function PortfolioCasestudy({ onProjectClick }: PortfolioCasestudyProps) {
  return (
    <div className="bg-[#e1f40b] relative size-full overflow-hidden" data-name="Portfolio-Casestudy">
      <div className="size-full">
        <div className="box-border gap-[8px] md:gap-[10px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(4,_minmax(0px,_1fr))] p-[20px] md:p-[32px] lg:p-[40px] relative size-full">
          <Project onClick={() => onProjectClick('trading-automation')} />
          <Project1 onClick={() => onProjectClick('white-label')} />
          <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none" style={{ width: 'clamp(180px, 20vw, 300px)', height: 'clamp(290px, 32vw, 488px)' }} data-name="mm_color_Orange">
            <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgMmColorOrange} />
          </div>
        </div>
      </div>
    </div>
  );
}