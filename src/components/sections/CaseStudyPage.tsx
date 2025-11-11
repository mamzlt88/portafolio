// CaseStudyPage.tsx — full-screen case study detail view with cover media and close control
import { ArrowLeft } from "lucide-react";

interface CaseStudyPageProps {
  title: string[];
  videoSrc?: string;
  headerImage: string;
  backgroundImage: string;
  onClose: () => void;
}

function Frame() {
  return <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" />;
}

function Mock({ headerImage }: { headerImage: string }) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Mock">
      <div className="absolute h-[870px] left-[calc(50%+0.5px)] top-[-1px] translate-x-[-50%] w-[1273px]" data-name="Mockup_header">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={headerImage} />
      </div>
    </div>
  );
}

function Cover({ headerImage, backgroundImage }: { headerImage: string; backgroundImage: string }) {
  return (
    <div className="absolute content-stretch flex h-[874px] items-center justify-center left-0 top-[80px] w-[1356px]" data-name="Cover">
      <div className="absolute left-1/2 size-[1880px] top-[calc(50%+227px)] translate-x-[-50%] translate-y-[-50%]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={backgroundImage} />
      </div>
      <Mock headerImage={headerImage} />
    </div>
  );
}

function Component({ videoSrc, headerImage, backgroundImage }: { videoSrc?: string; headerImage: string; backgroundImage: string }) {
  return (
    <div className="h-[1024px] overflow-clip relative shrink-0 w-[1356px]" data-name="1">
      {videoSrc && (
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline muted>
          <source src={videoSrc} />
        </video>
      )}
      <Cover headerImage={headerImage} backgroundImage={backgroundImage} />
    </div>
  );
}

function Frame2({ title }: { title: string[] }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[1.12] relative shrink-0 text-[32px] text-black text-nowrap tracking-[-1.28px] whitespace-pre">
      {title.map((word, index) => {
        const isItalic = word === 'Label' || word === 'Gateway' || word === 'Modernization' || word === 'Automation';
        const isBold = word === 'White' || word === 'Trading';
        const isSemibold = !isBold && isItalic;
        
        return (
          <p 
            key={index}
            className={`relative shrink-0 ${
              isBold 
                ? "font-['Poltawski_Nowy:Bold',sans-serif] font-bold" 
                : isSemibold 
                ? "font-['Poltawski_Nowy:SemiBold_Italic',sans-serif] font-semibold italic"
                : isItalic
                ? "font-['Poppins:SemiBold_Italic',sans-serif] italic"
                : "font-['Poppins:Regular',sans-serif] not-italic"
            }`}
          >
            {word}
          </p>
        );
      })}
    </div>
  );
}

function Frame1({ onClose }: { onClose: () => void }) {
  return (
    <div 
      onClick={onClose}
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-black/5 transition-colors"
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['DM_Mono:Medium',sans-serif] leading-[1.12] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.64px] uppercase whitespace-pre">Details</p>
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
        <div className="flex-none rotate-[90deg]">
          <ArrowLeft size={16} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

function Project({ title, onClose }: { title: string[]; onClose: () => void }) {
  return (
    <div className="bg-white box-border content-stretch flex h-[84px] items-center justify-between px-[32px] py-[40px] relative w-[1024px]" data-name="Project">
      <Frame2 title={title} />
      <Frame1 onClose={onClose} />
    </div>
  );
}

export default function CaseStudyPage({ title, videoSrc, headerImage, backgroundImage, onClose }: CaseStudyPageProps) {
  return (
    <div className="bg-black content-stretch flex items-center relative size-full" data-name="CaseStudy">
      <Frame />
      <Component videoSrc={videoSrc} headerImage={headerImage} backgroundImage={backgroundImage} />
      <div className="flex h-[1024px] items-center justify-center relative shrink-0 w-[84px]">
        <div className="flex-none rotate-[270deg]">
          <Project title={title} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
