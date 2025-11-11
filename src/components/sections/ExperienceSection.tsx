import { motion } from "motion/react";

function P() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="p">
      <p className="font-['Poppins',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.24px] w-full">I started working at 22, editing photos for a fashion store in the mornings and helping in a production company in the afternoons (Study at night). That mix of creativity and pace taught me to adapt quickly and find beauty in process. After that, I joined an advertising agency for my internship, where I learned the power of storytelling through visuals. When I emigrated, freelancing became my way forward, designing for small brands across USA. That experience led me to create MAZA Boutique Creativa, my own studio focused on branding and digital identity. Those beginnings shaped the way I design, lead, and connect with others with curiosity, empathy, and structure.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <P />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#6721ae] box-border content-stretch flex gap-[10px] items-center justify-center px-[21.6px] py-[7.2px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#6721ae] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-nowrap text-white tracking-[0.29px] uppercase whitespace-pre">Endava</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading">
      <p className="font-['DM_Mono',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] uppercase w-[min-content]">As a Leader and Coach</p>
      <Frame9 />
    </div>
  );
}

function YearPill({ year, isActive = false }: { year: string; isActive?: boolean }) {
  return (
    <div className={`${isActive ? 'bg-black' : 'bg-[#f3f9ae]'} box-border content-stretch flex gap-[10px] h-[31.5px] items-center justify-center px-[14.4px] py-[7.2px] relative rounded-[100px] w-[70.2px]`}>
      <div aria-hidden="true" className={`absolute border ${isActive ? 'border-black' : 'border-black'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
      <p className={`font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] ${isActive ? 'text-white' : 'text-black'} text-nowrap tracking-[0.29px] uppercase whitespace-pre`}>{year}</p>
    </div>
  );
}

function RotatedYearPill({ year, isActive = false }: { year: string; isActive?: boolean }) {
  return (
    <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "70.2", "--transform-inner-height": "31.5" } as React.CSSProperties}>
      <div className="flex-none rotate-[270deg]">
        <YearPill year={year} isActive={isActive} />
      </div>
    </div>
  );
}

function LeadershipYears() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative">
      <RotatedYearPill year="2025" isActive />
      <RotatedYearPill year="2024" />
      <RotatedYearPill year="2023" />
      <RotatedYearPill year="2022" />
      <RotatedYearPill year="2021" />
      <RotatedYearPill year="2020" />
    </div>
  );
}

function P1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="p">
      <p className="font-['Poppins',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] w-[min-content]">With 6 years of leadership experience, I was part of the team that built the Product and Design capability at Endava Colombia. I currently lead a multidisciplinary team of over 30 designers, business analysts, and strategists across Colombia, focusing on developing talent, strengthening delivery excellence, and aligning design strategy with business growth. I also participate in strategic conversations with clients, helping position our team as a trusted partner by connecting creative capability with business needs and commercial opportunities.</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "31.5", "--transform-inner-height": "457.2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <LeadershipYears />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Heading />
      <P1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#6721ae] box-border content-stretch flex gap-[10px] items-center justify-center px-[21.6px] py-[7.2px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#6721ae] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-nowrap text-white tracking-[0.29px] uppercase whitespace-pre">Endava</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading">
      <p className="font-['DM_Mono',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] uppercase w-[min-content]">As a Senior consultant</p>
      <Frame17 />
    </div>
  );
}

function ConsultantYears1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative">
      <RotatedYearPill year="2024" />
      <RotatedYearPill year="2023" />
      <RotatedYearPill year="2022" />
      <RotatedYearPill year="2021" />
      <RotatedYearPill year="2020" />
      <RotatedYearPill year="2019" />
      <RotatedYearPill year="2018" />
    </div>
  );
}

function ConsultantYears2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative">
      <RotatedYearPill year="2026" isActive />
      <RotatedYearPill year="2025" isActive />
    </div>
  );
}

function P2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="p">
      <p className="font-['Poppins',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] w-[min-content]">With 8 years of experience in consultancy, I've led product design and strategy initiatives across industries such as fintech, healthcare, and insurance. My work focuses on transforming complex business challenges into clear, scalable, and user-centered digital solutions. I've facilitated discovery sessions, defined product strategies, and built design systems that connect business goals with user needs. Collaborating closely with multidisciplinary teams, I help organizations align vision, process, and design to deliver measurable impact.</p>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "31.5", "--transform-inner-height": "534.6" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <ConsultantYears1 />
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "31.5", "--transform-inner-height": "147.6" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <ConsultantYears2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <P2 />
    </div>
  );
}

function BrandTags() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <div className="bg-[#6721ae] box-border content-stretch flex gap-[10px] items-center justify-center px-[21.6px] py-[7.2px] relative rounded-[100px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#6721ae] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-nowrap text-white tracking-[0.29px] uppercase whitespace-pre">Neri Design Group</p>
      </div>
      <div className="bg-[#6721ae] box-border content-stretch flex gap-[10px] items-center justify-center px-[21.6px] py-[7.2px] relative rounded-[100px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#6721ae] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-nowrap text-white tracking-[0.29px] uppercase whitespace-pre">Freelance</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading">
      <p className="font-['DM_Mono',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] uppercase w-[min-content]">{`Brand Design `}</p>
      <BrandTags />
    </div>
  );
}

function BrandYears1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative">
      <RotatedYearPill year="2018" />
      <RotatedYearPill year="2017" />
      <RotatedYearPill year="2016" />
      <RotatedYearPill year="2015" />
      <RotatedYearPill year="2014" />
      <RotatedYearPill year="2013" />
      <RotatedYearPill year="2012" />
    </div>
  );
}

function BrandYears2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative">
      <RotatedYearPill year="2025" isActive />
      <RotatedYearPill year="2024" />
      <RotatedYearPill year="2023" />
      <RotatedYearPill year="2022" />
      <RotatedYearPill year="2021" />
      <RotatedYearPill year="2020" />
      <RotatedYearPill year="2019" />
    </div>
  );
}

function BrandYears3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative">
      <RotatedYearPill year="2026" isActive />
    </div>
  );
}

function P3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="p">
      <p className="font-['Poppins',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] w-[min-content]">With 8 years of experience in brand and visual design, I help clients transform ideas into identities that evoke emotion and clarity. My work focuses on connecting strategy with creativity — shaping color, typography, and form into coherent visual languages. From founding MAZA Boutique Creativa to collaborating on large-scale brand initiatives, I've developed systems that express purpose and strengthen recognition across platforms.</p>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "31.5", "--transform-inner-height": "534.6" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <BrandYears1 />
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "31.5", "--transform-inner-height": "534.6" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <BrandYears2 />
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "31.5", "--transform-inner-height": "70.2" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <BrandYears3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Heading2 />
      <P3 />
    </div>
  );
}

function VisualTags1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#6721ae] box-border content-stretch flex gap-[10px] items-center justify-center px-[21.6px] py-[7.2px] relative rounded-[100px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#6721ae] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-nowrap text-white tracking-[0.29px] uppercase whitespace-pre">Nolck Red America</p>
      </div>
      <div className="bg-[#6721ae] box-border content-stretch flex gap-[10px] items-center justify-center px-[21.6px] py-[7.2px] relative rounded-[100px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#6721ae] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-nowrap text-white tracking-[0.29px] uppercase whitespace-pre">Neri Design Group</p>
      </div>
    </div>
  );
}

function VisualTags2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#6721ae] box-border content-stretch flex gap-[10px] items-center justify-center px-[21.6px] py-[7.2px] relative rounded-[100px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#6721ae] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-nowrap text-white tracking-[0.29px] uppercase whitespace-pre">eSmart Digital</p>
      </div>
      <div className="bg-[#6721ae] box-border content-stretch flex gap-[10px] items-center justify-center px-[21.6px] py-[7.2px] relative rounded-[100px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#6721ae] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-nowrap text-white tracking-[0.29px] uppercase whitespace-pre">Freelance</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading">
      <p className="font-['DM_Mono',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] uppercase w-full">Visual Designer</p>
      <VisualTags1 />
      <VisualTags2 />
    </div>
  );
}

function VisualYears() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative">
      <RotatedYearPill year="2018" />
      <RotatedYearPill year="2017" />
      <RotatedYearPill year="2016" />
      <RotatedYearPill year="2015" />
      <RotatedYearPill year="2014" />
      <RotatedYearPill year="2013" />
      <RotatedYearPill year="2012" />
    </div>
  );
}

function P4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="p">
      <p className="font-['Poppins',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] w-[min-content]">I began my career in graphic design, creating visual content and marketing assets for agencies and digital brands. Those early years taught me the foundations of composition, color, and communication — skills that continue to influence my work today. From editing product photos and producing social media visuals to designing digital interfaces, I built a deep understanding of how design connects people to stories, products, and experiences.</p>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "31.5", "--transform-inner-height": "534.6" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <VisualYears />
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Heading3 />
      <P4 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['DM_Mono',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black tracking-[0.48px] uppercase w-full">My experience</p>
      <Frame31 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <Frame32 />
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <motion.div
      className="size-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center px-[124px] py-[76px] relative w-full">
          <Content />
        </div>
      </div>
    </motion.div>
  );
}
