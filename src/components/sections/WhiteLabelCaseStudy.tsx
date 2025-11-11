import React from "react";
import { ArrowLeft } from "lucide-react";
import ResponsivePayetDevices from "../visuals/ResponsivePayetDevices";
import { Uarrowleft } from "../imports/icons";
import Open from "../imports/Open";

interface WhiteLabelCaseStudyProps {
  onClose: () => void;
}

function Frame() {
  return <div className="basis-0 grow h-full min-h-px min-w-px shrink-0 hidden lg:block" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[1.12] relative shrink-0 text-[18px] sm:text-[24px] lg:text-[32px] text-black text-nowrap tracking-[-1.28px] whitespace-pre">
      <p className="font-['Poltawski_Nowy:Bold',sans-serif] font-bold relative shrink-0">White</p>
      <p className="font-['Poppins:SemiBold_Italic',sans-serif] italic relative shrink-0">Label</p>
      <p className="font-['Poppins:Regular',sans-serif] not-italic relative shrink-0">{`Payment `}</p>
      <p className="font-['Poltawski_Nowy:SemiBold_Italic',sans-serif] font-semibold italic relative shrink-0 hidden sm:inline">Gateway</p>
      <p className="font-['Poppins:SemiBold_Italic',sans-serif] italic relative shrink-0 hidden sm:inline">Modernization</p>
    </div>
  );
}

interface Frame1Props {
  onClick?: () => void;
}

function Frame1({ onClick }: Frame1Props) {
  return (
    <button onClick={onClick} className="box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] relative rounded-[100px] shrink-0 hover:bg-black/5 transition-colors">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['DM_Mono:Medium',sans-serif] leading-[1.12] not-italic relative shrink-0 text-[12px] sm:text-[14px] lg:text-[16px] text-black text-nowrap tracking-[-0.64px] uppercase whitespace-pre">Details</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Uarrowleft />
        </div>
      </div>
    </button>
  );
}

interface ProjectProps {
  onToggle?: () => void;
}

function Project({ onToggle }: ProjectProps) {
  return (
    <div className="bg-white box-border content-stretch flex h-[60px] sm:h-[70px] lg:h-[84px] items-center justify-between px-[16px] sm:px-[24px] lg:px-[32px] py-[20px] sm:py-[30px] lg:py-[40px] relative w-full lg:w-[1024px]" data-name="Project 4">
      <Frame2 />
      <Frame1 onClick={onToggle} />
    </div>
  );
}

export default function WhiteLabelCaseStudy({ onClose }: WhiteLabelCaseStudyProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="bg-black flex flex-col lg:flex-row items-center relative size-full overflow-hidden" data-name="WhiteLabelCaseStudy">
      {/* Close button - Fixed position */}
      <button
        onClick={onClose}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-50 flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-sm sm:text-base"
      >
        <ArrowLeft size={16} strokeWidth={2} className="sm:w-5 sm:h-5" />
        <span className="font-['DM_Mono:Medium',sans-serif] tracking-tight uppercase">Close</span>
      </button>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:content-stretch lg:items-center lg:relative lg:size-full overflow-hidden">
        <Frame />
        
        {isSidebarOpen ? (
          <div className="h-[1024px] overflow-clip relative shrink-0 w-[383px]" />
        ) : (
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <ResponsivePayetDevices />
          </div>
        )}
        
        {isSidebarOpen ? (
          <Open onToggle={() => setIsSidebarOpen(false)} />
        ) : (
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1024", "--transform-inner-height": "84" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <Project onToggle={() => setIsSidebarOpen(true)} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="flex lg:hidden flex-col w-full h-full">
        {/* Content Area */}
        <div className="flex-1 w-full overflow-hidden">
          <ResponsivePayetDevices />
        </div>

        {/* Bottom Navigation Bar - Always visible on mobile/tablet */}
        <div className="w-full shrink-0">
          <Project onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black/80 z-40 flex items-end" onClick={() => setIsSidebarOpen(false)}>
            <div 
              className="w-full h-[80vh] bg-white rounded-t-3xl overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Case Study Details</h2>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ArrowLeft size={24} />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-sm font-['DM_Mono:Medium',sans-serif] uppercase text-gray-500 mb-2">Role</h3>
                    <p className="text-sm">Lead Product Designer / Consultant</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <h3 className="text-sm font-['DM_Mono:Medium',sans-serif] uppercase text-gray-500 mb-2">Timeline</h3>
                    <p className="text-sm">2018 - 2020</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <h3 className="text-sm font-['DM_Mono:Medium',sans-serif] uppercase text-gray-500 mb-2">Company</h3>
                    <p className="text-sm">Payet</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-['DM_Mono:Medium',sans-serif] uppercase text-gray-500 mb-2">Overview</h3>
                    <div className="space-y-4 text-sm leading-relaxed">
                      <p>
                        Payet is a white-label payment gateway that enables financial, automotive, and healthcare institutions to manage recurring and one-time payments under their own brand.
                      </p>
                      <p>
                        Over time, the platform became powerful but fragmented. Each portal looked and behaved differently, creating friction for users and inefficiencies for the business.
                      </p>
                      <p>
                        To unify the experience and prepare for rapid growth, <strong>a custom design system</strong> and <strong>phased redesign were introduced.</strong>
                      </p>
                      <p>
                        The initiative simplified user flows, reduced technical debt, and created a scalable foundation that supported more than 180 brands.
                      </p>
                      <p>
                        By improving usability and delivery efficiency, <strong>Payet</strong> strengthened engagement and scalability, helping the company more than double its annual payment volume from $7.45 billion in 2018 to $15.2 billion in 2020.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
