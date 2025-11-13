import svgPaths from "../imports/svg-9xwtypm6ze";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import TimelineSection from "./TimelineSection";
import SkillsSection from "./SkillsSection";
import Lenis from 'lenis';
import AnimatedModelImage from "../visuals/AnimatedModelImage";

function PillButton({ children, onClick, active }: { children: string; onClick: () => void; active: boolean }) {
  if (active) {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0" onClick={onClick}>
        <div className="bg-black box-border content-stretch flex flex-col h-[32.797px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0 cursor-pointer">
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.5] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.32px] uppercase whitespace-pre">{children}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" onClick={onClick}>
      <div className="box-border content-stretch flex flex-col h-[32.797px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-black/5 transition-colors">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.32px] uppercase whitespace-pre">{children}</p>
      </div>
    </div>
  );
}

function ProfilePageContent({ onClose, lenis, showImage = false }: { onClose: () => void; lenis: Lenis | null; showImage?: boolean }) {
  const [activeSection, setActiveSection] = useState('about-me');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['about-me', 'timeline', 'skills'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'about-me') {
      // Scroll to the top of the page for About Me
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element && lenis) {
        lenis.scrollTo(element, { duration: 1.5, offset: 0 });
      }
    }
  };

  return (
      <div className="bg-[#e1f40b] w-full">
        <div className="content-stretch flex flex-col items-end relative w-full">
          {/* Sticky Header */}
          <div className="sticky top-0 z-40 bg-[#e1f40b] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between px-[40px] md:px-[60px] lg:px-[124px] py-[16px] md:py-[20px] lg:py-[24px] relative w-full">
            {/* Pills */}
            <div className="basis-0 content-stretch flex gap-[8px] md:gap-[12px] lg:gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
              <PillButton onClick={() => scrollToSection('about-me')} active={activeSection === 'about-me'}>About Me</PillButton>
              <PillButton onClick={() => scrollToSection('timeline')} active={activeSection === 'timeline'}>Timeline</PillButton>
              <div className="hidden lg:block">
                <PillButton onClick={() => scrollToSection('skills')} active={activeSection === 'skills'}>Skills</PillButton>
              </div>
            </div>
            
            {/* Close Button */}
            <motion.div
              className="bg-black content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[40px] md:size-[48px] lg:size-[56px] cursor-pointer"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.0 }}
            >
              <div className="relative shrink-0 size-[20px] md:size-[24px] lg:size-[28px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <path d="M18 6L6 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M6 6L18 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content About Me Section */}
      <section id="about-me" className="relative shrink-0 w-full min-h-screen sticky top-0 bg-[#e1f40b] overflow-hidden">
        {/* Shared layout background morph from Landing's Yellow 2 tile */}
        <motion.div
          layoutId="about-tile"
          initial={{ borderRadius: 24 }}
          animate={{ borderRadius: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 -z-10"
          style={{ background: '#E5F34D' }}
          aria-hidden
        />
        <div className="flex flex-col items-start justify-center size-full">
          <div className="box-border content-stretch flex flex-col lg:flex-row gap-[40px] md:gap-[50px] lg:gap-[60px] items-start justify-start pl-[80px] p-[40px] md:p-[60px] lg:p-[80px] relative w-full">
            {/* Text Content */}
            <motion.div
              className="content-stretch flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px] items-start relative shrink-0 w-full lg:w-[503px] pt-[148px] pr-[0px] pb-[0px] pl-[51px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full">
                <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.5] relative shrink-0 md:text-[28px] lg:text-[32px] tracking-[0.8px] uppercase text-[32px]">About Me</p>
                <p className="font-['Poppins',_sans-serif] leading-[1.5] relative shrink-0 text-[18px] md:text-[20px] lg:text-[24px] w-full">{`I'm a Venezuelan designer living in Colombia. I moved here 12 years ago, chasing new opportunities and a deeper sense of purpose. That experience taught me adaptability, resilience, empathy, and the beauty of starting over.`}</p>
              </div>
              
              {/* Scroll for Details Button */}
              <div className="box-border content-stretch flex gap-[10px] h-[32.797px] items-start px-0 py-[8px] relative rounded-[100px] shrink-0 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => scrollToSection('details')}>
                <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.32px] uppercase whitespace-pre">Scroll for Details</p>
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute inset-[8.33%_22.56%_10.03%_22.57%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
                      <path d={svgPaths.p2e3c0a80} fill="#252C37" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
            

            {/* Model on the right (visible on large screens) */}
            <motion.div
              layoutId="model"
              className="relative w-full lg:flex-1 min-h-[420px] md:min-h-[520px] lg:min-h-[640px]"
              initial={false}
              animate={{ scale: 0.7, x: 24, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <div className="absolute inset-y-0 right-[-4%] w-[380px] md:w-[480px] lg:w-[560px]">
                <AnimatedModelImage />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center py-[80px] md:py-[150px] lg:py-[300px] relative shrink-0 w-full min-h-screen sticky top-0 rounded-tr-[32px] rounded-tl-[32px] overflow-hidden px-[40px] py-[238px]">
        <div className="content-stretch flex flex-col lg:flex-row gap-[60px] md:gap-[70px] lg:gap-[80px] items-start justify-center relative shrink-0 w-full max-w-[1379px]">
          {/* Left Text Column */}
          <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 w-full lg:w-auto lg:max-w-[455px]">
            <div className="content-stretch flex flex-col gap-[16px] md:gap-[18px] lg:gap-[20px] items-start not-italic relative shrink-0 text-black w-full max-w-[455px]">
              <p className="font-['Trim',_'Courier_New',_monospace] leading-[28.8px] relative shrink-0 text-[24px] md:text-[28px] lg:text-[32px] tracking-[0.8px] uppercase">Details</p>
              <div className="font-['Poppins',_sans-serif] leading-[1.5] relative shrink-0 text-[16px] md:text-[17px] lg:text-[18px]">
                <p className="mb-0">Today, I lead a 30-person team of designers, business analysts, and strategists at Endava Colombia, where I connect creativity and structure to make complex ideas simple and meaningful.</p>
                <p className="mb-0">{`I'm also a brand designer at heart. I love turning ideas into colors, shapes, and feelings that capture a story and bring it to life.`}</p>
                <p className="mb-0">I really enjoy solving problems through design, strategy, or simple conversations that open new perspectives.</p>
                <p>{`Beyond work, I'm an artist and astrologer by passion. My creative and intuitive worlds constantly inspire the way I design, lead, and connect with people`}</p>
              </div>
            </div>
            
            {/* See Timeline Button */}
            <div className="box-border content-stretch flex gap-[10px] h-[32.797px] items-start px-0 py-[8px] relative rounded-[100px] shrink-0 cursor-pointer mt-[32px] md:mt-[40px] lg:mt-0" onClick={() => scrollToSection('timeline')}>
              <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.32px] uppercase whitespace-pre">See Timeline</p>
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute inset-[8.33%_22.56%_10.03%_22.57%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
                    <path d={svgPaths.p2e3c0a80} fill="#252C37" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Dashboard Column */}
          <div className="content-stretch flex flex-col gap-[20px] md:gap-[28px] lg:gap-[32px] items-start relative w-full lg:w-[844px] lg:shrink-0">
            {/* Three Cards */}
            <div className="content-stretch flex flex-col md:flex-row gap-[12px] md:gap-[14px] lg:gap-[16px] items-stretch relative shrink-0 w-full">
              {/* Years of Experience */}
              <div className="basis-0 grow min-h-[120px] md:min-h-[120.5px] relative rounded-[16px] md:rounded-[20px] lg:rounded-[24px] shrink-0 w-full md:w-auto">
                <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[20px] lg:rounded-[24px]" />
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-between pb-[2px] pt-[20px] md:pt-[24px] lg:pt-[26px] px-[20px] md:px-[24px] lg:px-[26px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[4px] h-[68.5px] items-start relative shrink-0 w-full">
                      <div className="h-[16.5px] relative shrink-0 w-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-full">
                          <p className="absolute font-['Trim',_'Courier_New',_monospace] leading-[16.5px] left-0 not-italic text-[10px] md:text-[10.5px] lg:text-[11px] text-[rgba(0,0,0,0.6)] text-nowrap top-[-0.5px] tracking-[0.5px] uppercase whitespace-pre">Years of Experience</p>
                        </div>
                      </div>
                      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-full">
                          <p className="absolute font-['Poppins',_sans-serif] leading-[48px] left-0 not-italic text-[28px] md:text-[30px] lg:text-[32px] text-black text-nowrap top-[1.5px] whitespace-pre">10+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Leadership Experience */}
              <div className="basis-0 grow min-h-[120px] md:min-h-[120.5px] relative rounded-[16px] md:rounded-[20px] lg:rounded-[24px] shrink-0 w-full md:w-auto">
                <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[20px] lg:rounded-[24px]" />
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-between pb-[2px] pt-[20px] md:pt-[24px] lg:pt-[26px] px-[20px] md:px-[24px] lg:px-[26px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[4px] h-[68.5px] items-start relative shrink-0 w-full">
                      <div className="h-[16.5px] relative shrink-0 w-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-full">
                          <p className="absolute font-['Trim',_'Courier_New',_monospace] leading-[16.5px] left-0 not-italic text-[10px] md:text-[10.5px] lg:text-[11px] text-[rgba(0,0,0,0.6)] text-nowrap top-[-0.5px] tracking-[0.5px] uppercase whitespace-pre">Leadership Experience</p>
                        </div>
                      </div>
                      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-full">
                          <p className="absolute font-['Poppins',_sans-serif] leading-[48px] left-0 not-italic text-[24px] md:text-[28px] lg:text-[32px] text-black text-nowrap top-[1.5px] whitespace-pre">5 years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Consultancy Experience */}
              <div className="basis-0 grow min-h-[120px] md:min-h-[120.5px] relative rounded-[16px] md:rounded-[20px] lg:rounded-[24px] shrink-0 w-full md:w-auto">
                <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[20px] lg:rounded-[24px]" />
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-between pb-[2px] pt-[20px] md:pt-[24px] lg:pt-[26px] px-[20px] md:px-[24px] lg:px-[26px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[4px] h-[68.5px] items-start relative shrink-0 w-full">
                      <div className="h-[16.5px] relative shrink-0 w-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-full">
                          <p className="absolute font-['Trim',_'Courier_New',_monospace] leading-[16.5px] left-0 not-italic text-[10px] md:text-[10.5px] lg:text-[11px] text-[rgba(0,0,0,0.6)] text-nowrap top-[-0.5px] tracking-[0.5px] uppercase whitespace-pre">Consultancy Experience</p>
                        </div>
                      </div>
                      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-full">
                          <p className="absolute font-['Poppins',_sans-serif] leading-[48px] left-0 not-italic text-[24px] md:text-[28px] lg:text-[32px] text-black text-nowrap top-[1.5px] whitespace-pre">8 years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience by Focus Area */}
            <div className="relative rounded-[16px] md:rounded-[18px] lg:rounded-[20px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[18px] lg:rounded-[20px]" />
              <div className="size-full">
                <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[2px] pt-[22px] px-[22px] relative w-full mt-[0px] mr-[0px] mb-[25px] ml-[0px]">
                  <div className="relative shrink-0 w-full">
                    <p className="font-['Trim',_'Courier_New',_monospace] leading-[21px] not-italic text-[14px] text-black tracking-[0.6px] uppercase">Experience by Focus Area</p>
                  </div>
                  
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    {/* Leadership Row */}
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <p className="font-['Poppins',_sans-serif] leading-[19.5px] not-italic text-[13px] text-black">{`Leadership & Coaching`}</p>
                        <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] not-italic text-[11px] text-[rgba(0,0,0,0.6)]">5 years</p>
                      </div>
                      <div className="bg-[rgba(0,0,0,0.1)] h-[24px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                        <div className="absolute bg-black box-border content-stretch flex h-[24px] items-center left-0 px-[12px] py-0 right-[50px] md:right-[345px] rounded-[12px] top-1/2 translate-y-[-50%]">
                          <p className="hidden lg:block font-['Poppins',_sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">{`Built Product & Design capability, DesignOps led 30+ professionals`}</p>
                        </div>
                      </div>
                      <p className="lg:hidden font-['Poppins',_sans-serif] leading-[15px] not-italic text-[10px] text-black">{`Built Product & Design capability, DesignOps led 30+ professionals`}</p>
                    </div>

                    {/* Consultancy Row */}
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <p className="font-['Poppins',_sans-serif] leading-[19.5px] not-italic text-[13px] text-black">Consultancy</p>
                        <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] not-italic text-[11px] text-[rgba(0,0,0,0.6)]">8 years</p>
                      </div>
                      <div className="bg-[rgba(0,0,0,0.1)] h-[24px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                        <div className="absolute bg-black box-border content-stretch flex h-[24px] items-center left-0 pl-[12px] pr-0 py-0 right-[10px] md:right-[75px] rounded-[12px] top-1/2 translate-y-[-50%]">
                          <p className="hidden lg:block font-['Poppins',_sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">UX strategy, UX Design, Visual Design, Design System.</p>
                        </div>
                      </div>
                      <p className="lg:hidden font-['Poppins',_sans-serif] leading-[15px] not-italic text-[10px] text-black">UX strategy, UX Design, Visual Design, Design System.</p>
                    </div>

                    {/* Brand Design Row */}
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <p className="font-['Poppins',_sans-serif] leading-[19.5px] not-italic text-[13px] text-black">Brand Design</p>
                        <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] not-italic text-[11px] text-[rgba(0,0,0,0.6)]">+10 years</p>
                      </div>
                      <div className="bg-[rgba(0,0,0,0.1)] h-[24px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                        <div className="absolute bg-black box-border content-stretch flex h-[24px] items-center left-0 pl-[12px] pr-0 py-0 right-0 rounded-[12px] top-1/2 translate-y-[-50%]">
                          <p className="hidden lg:block font-['Poppins',_sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">Brand systems, Brand identities.</p>
                        </div>
                      </div>
                      <p className="lg:hidden font-['Poppins',_sans-serif] leading-[15px] not-italic text-[10px] text-black">Brand systems, Brand identities.</p>
                    </div>

                    {/* Graphic Design Row */}
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <p className="font-['Poppins',_sans-serif] leading-[19.5px] not-italic text-[13px] text-black">Graphic Design</p>
                        <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] not-italic text-[11px] text-[rgba(0,0,0,0.6)]">+10 years</p>
                      </div>
                      <div className="bg-[rgba(0,0,0,0.1)] h-[24px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                        <div className="absolute bg-black box-border content-stretch flex h-[24px] items-center left-0 pl-[12px] pr-0 py-0 right-0 rounded-[12px] top-1/2 translate-y-[-50%]">
                          <p className="hidden lg:block font-['Poppins',_sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">Visual storytelling and composition.</p>
                        </div>
                      </div>
                      <p className="lg:hidden font-['Poppins',_sans-serif] leading-[15px] not-italic text-[10px] text-black">Visual storytelling and composition.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Black Background */}
      <section id="timeline" className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-start relative shrink-0 w-full rounded-tr-[32px] rounded-tl-[32px] overflow-hidden">
        <TimelineSection onClickSkills={() => scrollToSection('skills')} />
      </section>

      {/* Skills Section (hidden on small screens) */}
      <section id="skills" className="hidden lg:block relative shrink-0 w-full min-h-screen sticky top-0 rounded-tr-[32px] rounded-tl-[32px] overflow-hidden">
        <SkillsSection onScrollUp={() => scrollToSection('about-me')} lenis={lenis} />
      </section>
        </div>
      </div>
  );
}

export default function ProfilePage({ onClose, showImage = false }: { onClose: () => void; showImage?: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const lenisInstance = new Lenis({
      wrapper: wrapperRef.current,
      content: wrapperRef.current.firstElementChild as HTMLElement,
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="size-full overflow-y-auto overflow-x-hidden">
      <div className="bg-[#f3f9ae] w-full min-h-screen">
        <ProfilePageContent onClose={onClose} lenis={lenis} showImage={showImage} />
      </div>
    </div>
  );
}
