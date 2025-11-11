import { motion } from "motion/react";

function Heading() {
  return <div className="basis-0 grow h-[60px] min-h-px min-w-px shrink-0" data-name="Heading" />;
}

function P() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black" data-name="p">
      <p className="font-['DM_Mono',sans-serif] leading-[1.2] relative shrink-0 tracking-[-0.72px] w-full">{`Visuals, Branding, & User Experience`}</p>
      <div className="font-['Poppins',sans-serif] leading-[1.5] relative shrink-0 tracking-[0.18px] w-full">
        <p className="mb-0">
          {`I lead, design, and shape meaningful experiences that connect `}
          <br aria-hidden="true" />
          people, products, and purpose.
        </p>
        <p>
          {`My work moves across several dimensions, from defining product strategies to creating intuitive user interfaces and brand identities `}
          <br aria-hidden="true" />
          that feel alive.
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Heading />
      <P />
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading">
      <p className="font-['DM_Mono',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] uppercase w-full">Product Design</p>
    </div>
  );
}

function P1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="p">
      <p className="font-['Poppins',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] w-full">Turning insights into usable, elegant solutions.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <P1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading">
      <p className="font-['DM_Mono',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] uppercase w-full">{`Design systems `}</p>
    </div>
  );
}

function P2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="p">
      <p className="font-['Poppins',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] w-full">
        {`Building scalable foundations that bring consistency and clarity `}
        <br aria-hidden="true" />
        to complex products.
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Heading2 />
      <P2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading">
      <p className="font-['DM_Mono',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] uppercase w-full">{`Brand Design `}</p>
    </div>
  );
}

function P3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="p">
      <p className="font-['Poppins',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] w-full">Transforming ideas into color, shape, and emotion.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Heading3 />
      <P3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading">
      <p className="font-['DM_Mono',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] uppercase w-full">{`Leadership & Coaching`}</p>
    </div>
  );
}

function P4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="p">
      <p className="font-['Poppins',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] w-full">Guiding multidisciplinary teams toward growth and creative excellence.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Heading4 />
      <P4 />
    </div>
  );
}

function Frame11() {
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

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full">
      <p id="what-i-do-title" className="font-['DM_Mono',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black tracking-[0.48px] uppercase w-full">What I do</p>
      <Frame11 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Frame10 />
    </div>
  );
}

export default function WhatIDoSection() {
  return (
    <motion.div
      className="size-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-[124px] py-[76px] relative size-full">
          <div className="absolute bg-[#f3f9ae] h-[1037px] left-0 rounded-[200px] top-0 w-[1648px]" />
          <Content />
        </div>
      </div>
    </motion.div>
  );
}
