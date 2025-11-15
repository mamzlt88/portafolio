import imgFashionModel from "figma:asset/3d085c9578974206b02761d0dcb6c75c0648a04d.png";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen lg:min-h-0 flex items-center justify-center overflow-hidden px-[50px] py-[55px]">
      {/* Background color blocks grid */}
      <div className="absolute gap-[71px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(4,_minmax(0px,_1fr))] h-[2177px] left-[50px] rounded-[32px] top-[55px] w-[3011px]">
        <motion.div 
          className="[grid-area:1_/_1] rounded-[200px] shrink-0" 
          animate={{ 
            backgroundColor: ["#f3f9ae", "#e1f40b", "#a4b200", "#fbfde2", "#f3f9ae"]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="[grid-area:1_/_2] rounded-[200px] shrink-0" 
          animate={{ 
            backgroundColor: ["#e1f40b", "#a4b200", "#636b00", "#e1f40b"]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
        <motion.div 
          className="[grid-area:2_/_1] rounded-[200px] shrink-0" 
          animate={{ 
            backgroundColor: ["#a4b200", "#636b00", "#a456f3", "#8923ee", "#a4b200"]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
        <motion.div 
          className="[grid-area:2_/_2] rounded-[200px] shrink-0" 
          animate={{ 
            backgroundColor: ["#636b00", "#8923ee", "#600fb2", "#636b00"]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
        />
        <motion.div 
          className="[grid-area:3_/_2] rounded-[200px] shrink-0" 
          animate={{ 
            backgroundColor: ["#ddccef", "#a456f3", "#8923ee", "#ddccef"]
          }}
          transition={{ 
            duration: 13, 
            repeat: Infinity,
            ease: "linear",
            delay: 1.5
          }}
        />
        <motion.div 
          className="[grid-area:4_/_1] rounded-[200px] shrink-0" 
          animate={{ 
            backgroundColor: ["#8923ee", "#a456f3", "#600fb2", "#161616", "#8923ee"]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear",
            delay: 2.5
          }}
        />
        <motion.div 
          className="[grid-area:3_/_1] rounded-[200px] shrink-0" 
          animate={{ 
            backgroundColor: ["#fbfde2", "#f3f9ae", "#e1f40b", "#fbfde2"]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }}
        />
        <motion.div 
          className="[grid-area:4_/_2] rounded-[200px] shrink-0" 
          animate={{ 
            backgroundColor: ["#929292", "#161616", "#636b00", "#929292"]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity,
            ease: "linear",
            delay: 3.5
          }}
        />
      </div>

      {/* Center fashion model image */}
      <div className="absolute h-[2220px] left-[558px] top-[55px] w-[2065px] z-10">
        <img 
          alt="Mariana Machado" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgFashionModel} 
        />
      </div>

      {/* Text labels */}
      <p 
        onClick={() => scrollToSection('projects')}
        className="absolute font-['Trim_Mono:Regular',sans-serif] leading-[1.5] left-[2471px] not-italic text-[75px] text-black top-[1472px] tracking-[1.5px] uppercase w-[459px] z-20 cursor-pointer hover:text-[#a456f3] transition-colors duration-300"
      >
        PROJECTS
      </p>
      <p 
        onClick={() => scrollToSection('profile')}
        className="absolute font-['Trim_Mono:Regular',sans-serif] leading-[1.5] left-[227px] not-italic text-[75px] text-black top-[683px] tracking-[1.5px] uppercase w-[558px] z-20 cursor-pointer hover:text-[#a456f3] transition-colors duration-300"
      >
        MY PROFILE
      </p>
    </section>
  );
}
