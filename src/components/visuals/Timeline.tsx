import { motion } from "motion/react";
import { Camera, Pen, Briefcase, Palette, Layout, Users, TrendingUp, Target } from "lucide-react";

export default function Timeline() {
  const experiences = [
    {
      period: "2010–2011",
      company: "Freelance & Early Creative Roles",
      role: "Photo Editor & Production Assistant",
      description: "Started my career editing product photos for a fashion store in the mornings and working at a production company in the afternoons. Learned the fundamentals of visual storytelling, composition, and time management while collaborating on photo and video projects.",
      icon: Camera
    },
    {
      period: "2011–2014",
      company: "Nölck Red América",
      role: "Art Director Jr",
      description: "Joined the agency as an intern and was later hired as a Junior Art Director. Collaborated with multidisciplinary teams on advertising campaigns and brand development for major Venezuelan clients. Worked on concept creation, corporate identity design, and 2D animation for brands such as Wendy's, Laser Airlines, and Seguros Constitución.",
      icon: Target
    },
    {
      period: "2016",
      company: "eSmart Digital",
      role: "Graphic Designer",
      description: "Created digital assets and marketing materials for social and web campaigns. Collaborated with creative teams to build visual consistency and improve digital communication.",
      icon: Pen
    },
    {
      period: "2016–2018",
      company: "MAZA Boutique Creativa",
      role: "Founder & Brand Designer",
      description: "Founded a design boutique specializing in branding and digital identity for Latin American clients. Developed logos, brand systems, and websites that connected emotion with structure.",
      icon: Briefcase
    },
    {
      period: "2016–2018",
      company: "Neri Design Group",
      role: "Senior Visual Designer",
      description: "Worked on brand identity, campaign design, and motion graphics for LATAM and U.S. markets. Focused on storytelling through corporate imagery and digital communication.",
      icon: Palette
    },
    {
      period: "2018–2020",
      company: "Endava",
      role: "Visual Designer",
      description: "Designed UI systems and digital interfaces for fintech clients. Mentored junior designers and contributed to the creation of internal design standards and processes.",
      icon: Layout
    },
    {
      period: "2020–2023",
      company: "Endava",
      role: "Senior Consultant / Creative Discipline Lead",
      description: "Led UX strategy and design system initiatives across industries. Played a key role in establishing the Product and Design capability in Colombia, improving delivery quality and alignment between design and business strategy.",
      icon: Users
    },
    {
      period: "2023–Present",
      company: "Endava",
      role: "Head of Product and Design",
      description: "Leading a multidisciplinary team of 30+ designers, business analysts, and strategists across Latin America. Focused on talent development, operational excellence, and strategic alignment with client goals. Participates in strategic discussions to position design as a business enabler.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="w-full max-w-[900px] mx-auto py-[80px] px-[40px]">
      <div className="relative">
        {/* Main vertical line */}
        <div className="absolute left-[25px] top-0 bottom-0 w-[2px]">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 100">
            <line 
              x1="1" y1="0" 
              x2="1" y2="100" 
              stroke="black" 
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        {/* Timeline items */}
        <div className="space-y-[80px]">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            
            return (
              <div key={`${exp.company}-${exp.period}`} className="relative flex items-start">
                {/* Icon circle */}
                <motion.div
                  className="relative z-10 w-[50px] h-[50px] rounded-full bg-black border-2 border-black flex items-center justify-center shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Icon size={24} className="text-white" />
                </motion.div>

                {/* Horizontal dotted line */}
                <div className="absolute left-[50px] top-[25px] w-[60px] h-[2px]">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 2">
                    <line 
                      x1="0" y1="1" 
                      x2="100" y2="1" 
                      stroke="black" 
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                  </svg>
                </div>

                {/* Content box */}
                <motion.div
                  className="ml-[60px] flex-1 border-2 border-black rounded-[16px] p-[24px] bg-white"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 + 0.1 }}
                >
                  <div className="space-y-[12px]">
                    {/* Period and Company */}
                    <p className="font-['Trim',_'Courier_New',_monospace] text-[11px] uppercase tracking-[0.5px] text-black/60">
                      {exp.period} | {exp.company}
                    </p>
                    
                    {/* Role */}
                    <p className="font-['Poppins',_sans-serif] text-[18px] text-black">
                      {exp.role}
                    </p>
                    
                    {/* Description */}
                    <p className="font-['Trim',_'Courier_New',_monospace] text-[12px] leading-[1.7] text-black/70">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
