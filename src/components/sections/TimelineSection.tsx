import svgPaths from "../imports/svg-setv9iemcp";

function Group() {
  return (
    <div className="absolute inset-[14.88%_14.35%_16.96%_14.35%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Group">
          <path d={svgPaths.p3a0c200} fill="#252C37" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="relative shrink-0 size-[14px]" data-name="Toggle/star">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[14px]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="content-stretch flex items-center justify-center relative w-full" data-name="Timeline">
      <Container />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-2.67px] left-0 right-[-0.67%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 403 6">
            <path d={svgPaths.p93bc900} fill="white" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-start justify-center not-italic px-[20px] md:px-[40px] py-0 relative w-full">
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] relative shrink-0 text-[#f3f9ae] text-[11px] text-nowrap text-right tracking-[0.5px] uppercase whitespace-pre">{`Endava  `}</p>
          <p className="font-['Poppins',_sans-serif] leading-[22px] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] text-nowrap text-right text-white tracking-[-1px] whitespace-pre">{`Head of Product and Design  `}</p>
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[20.4px] relative shrink-0 text-[12px] text-white w-full md:w-[313px] whitespace-pre-wrap">{`Leading a multidisciplinary team of 30+ designers, business analysts, and strategists across Latin America. Focused on talent development, operational excellence, and strategic alignment with client goals. Participates in strategic discussions to position design as a business enabler.  `}</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <Timeline />
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-6 md:gap-[110px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] not-italic relative shrink-0 text-[#f3f9ae] text-[12px] sm:text-[14px] md:text-[16px] text-right tracking-[0.5px] uppercase w-auto md:w-[322px]">2023–Present</p>
      <Content />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="relative shrink-0 size-[14px]" data-name="u:suitcase-alt">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[14px]">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
              <path d={svgPaths.p9638600} fill="black" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Timeline">
      <Container2 />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-2.67px] left-0 right-[-0.82%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 6">
            <path d={svgPaths.p170a1a80} fill="white" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-end justify-center not-italic px-[20px] md:px-[40px] py-0 relative text-right w-full">
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[15px] relative shrink-0 text-[#f3f9ae] text-[10px] text-nowrap tracking-[0.5px] uppercase whitespace-pre">Endava</p>
          <p className="font-['Poppins',_sans-serif] leading-[22px] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre">
            Senior Consultant |<br aria-hidden="true" />
            {`Creative Capability Lead  `}
          </p>
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[20.4px] relative shrink-0 text-[12px] text-white w-full md:w-[313px] whitespace-pre-wrap">{`Led UX strategy and design system initiatives across industries. Played a key role in establishing the Product and Design capability in Colombia, improving delivery quality and alignment between design and business strategy.  `}</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Timeline1 />
      <Frame1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-4 md:gap-[73px] items-center justify-center pl-4 md:pl-[74px] pr-0 py-0 relative w-full">
          <Content1 />
          <p className="basis-0 font-['Trim',_'Courier_New',_monospace] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3f9ae] text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.8px] uppercase">2020–2023</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="relative shrink-0 size-[14px]" data-name="Hardware/computer">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[14px]">
          <div className="absolute bottom-[16.67%] left-0 right-0 top-[16.67%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
              <path d={svgPaths.p2958e0f0} fill="#252C37" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline2() {
  return (
    <div className="content-stretch flex items-center justify-center relative w-full" data-name="Timeline">
      <Container4 />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-2.67px] left-0 right-[-0.67%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 403 6">
            <path d={svgPaths.p93bc900} fill="white" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-start justify-center not-italic px-[20px] md:px-[40px] py-0 relative w-full">
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] relative shrink-0 text-[#f3f9ae] text-[11px] text-nowrap text-right tracking-[0.5px] uppercase whitespace-pre">{`Endava  `}</p>
          <p className="font-['Poppins',_sans-serif] leading-[22px] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] text-nowrap text-right text-white tracking-[-1px] whitespace-pre">{`Senior Visual Designer  `}</p>
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[20.4px] relative shrink-0 text-[12px] text-white w-full md:w-[313px] whitespace-pre-wrap">{`Designed UI systems and digital interfaces for fintech clients. Mentored junior designers and contributed to the creation of internal design standards and processes.  `}</p>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <Timeline2 />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-6 md:gap-[110px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] not-italic relative shrink-0 text-[#f3f9ae] text-[12px] sm:text-[14px] md:text-[16px] text-right tracking-[0.5px] uppercase w-auto md:w-[322px]">2018–2020</p>
      <Content2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="relative shrink-0 size-[14px]" data-name="Editor/format_shapes">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[14px]">
          <div className="absolute inset-[4.167%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p1078c100} fill="#252C37" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Timeline">
      <Container6 />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-2.67px] left-0 right-[-0.82%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 6">
            <path d={svgPaths.p170a1a80} fill="white" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-end justify-center not-italic px-[20px] md:px-[40px] py-0 relative text-right w-full">
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[15px] relative shrink-0 text-[#f3f9ae] text-[10px] text-nowrap tracking-[0.5px] uppercase whitespace-pre">{` Neri Design Group  `}</p>
          <p className="font-['Poppins',_sans-serif] leading-[22px] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre">Visual Designer</p>
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[20.4px] relative shrink-0 text-[12px] text-white w-full md:w-[313px] whitespace-pre-wrap">{`Worked on brand identity, campaign design, and motion graphics for LATAM and U.S. markets. Focused on storytelling through corporate imagery and digital communication.  `}</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Timeline3 />
      <Frame3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-4 md:gap-[73px] items-center justify-center pl-4 md:pl-[74px] pr-0 py-0 relative w-full">
          <Content3 />
          <p className="basis-0 font-['Trim',_'Courier_New',_monospace] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3f9ae] text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.8px] uppercase">2016–2018</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="relative shrink-0 size-[14px]" data-name="u:suitcase-alt">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[14px]">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
              <path d={svgPaths.p9638600} fill="black" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline4() {
  return (
    <div className="content-stretch flex items-center justify-center relative w-full" data-name="Timeline">
      <Container8 />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-2.67px] left-0 right-[-0.67%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 403 6">
            <path d={svgPaths.p93bc900} fill="white" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-start justify-center not-italic px-[20px] md:px-[40px] py-0 relative w-full">
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] relative shrink-0 text-[#f3f9ae] text-[11px] text-nowrap text-right tracking-[0.5px] uppercase whitespace-pre">{` MAZA Boutique Creativa`}</p>
          <p className="font-['Poppins',_sans-serif] leading-[22px] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] text-nowrap text-right text-white tracking-[-1px] whitespace-pre">{`Founder &  Visual Designer`}</p>
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[20.4px] relative shrink-0 text-[12px] text-white w-full md:w-[313px] whitespace-pre-wrap">{`Founded a design boutique specializing in  consulting in branding and digital identity for Latin American clients. Developed logos, brand systems, and Landing pages.`}</p>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <Timeline4 />
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-6 md:gap-[110px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] not-italic relative shrink-0 text-[#f3f9ae] text-[12px] sm:text-[14px] md:text-[16px] text-right tracking-[0.5px] uppercase w-auto md:w-[322px]">2016–2018</p>
      <Content4 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[19.61%_19.62%_16.67%_16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Group">
          <path d={svgPaths.p4406880} fill="#252C37" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[19.61%_19.62%_16.67%_16.67%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="relative shrink-0 size-[14px]" data-name="Content/square_foot">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[14px]">
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Timeline5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Timeline">
      <Container10 />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-2.67px] left-0 right-[-0.82%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 6">
            <path d={svgPaths.p170a1a80} fill="white" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-end justify-center not-italic px-[20px] md:px-[40px] py-0 relative text-right w-full">
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[15px] relative shrink-0 text-[#f3f9ae] text-[10px] text-nowrap tracking-[0.5px] uppercase whitespace-pre">eSmart Digital</p>
          <p className="font-['Poppins',_sans-serif] leading-[22px] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre">Graphic Designer</p>
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[20.4px] relative shrink-0 text-[12px] text-white w-full md:w-[313px]">Created digital assets and marketing materials for social and web campaigns. Collaborated with creative teams to build visual consistency and improve digital communication.</p>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Timeline5 />
      <Frame5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-4 md:gap-[73px] items-center justify-center pl-4 md:pl-[74px] pr-0 py-0 relative w-full">
          <Content5 />
          <p className="basis-0 font-['Trim',_'Courier_New',_monospace] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3f9ae] text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.8px] uppercase">2016</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="relative shrink-0 size-[14px]" data-name="Image/brush">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[14px]">
          <div className="absolute inset-[12.49%_12.49%_12.5%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
              <path d={svgPaths.p2efb1900} fill="#252C37" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline6() {
  return (
    <div className="content-stretch flex items-center justify-center relative w-full" data-name="Timeline">
      <Container12 />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-2.67px] left-0 right-[-0.67%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 403 6">
            <path d={svgPaths.p93bc900} fill="white" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-start justify-center not-italic px-[20px] md:px-[40px] py-0 relative w-full">
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.5px] relative shrink-0 text-[#f3f9ae] text-[11px] text-nowrap text-right tracking-[0.5px] uppercase whitespace-pre">{` Nölck Red América`}</p>
          <p className="font-['Poppins',_sans-serif] leading-[22px] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] text-nowrap text-right text-white tracking-[-1px] whitespace-pre">Art Director Jr</p>
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[20.4px] relative shrink-0 text-[12px] text-white w-full md:w-[313px]">{`Joined the agency as an intern and was later hired as a Junior Art Director. Collaborated with multidisciplinary teams on advertising campaigns and brand development for major Venezuelan clients. Worked on concept creation, corporate identity design, and 2D animation for brands such as Wendy's, Laser Airlines, and Seguros Constitución.`}</p>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <Timeline6 />
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[110px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Trim',_'Courier_New',_monospace] leading-[18px] not-italic relative shrink-0 text-[#f3f9ae] text-[12px] sm:text-[14px] md:text-[16px] text-right tracking-[0.8px] uppercase w-[322px]">{`2011–2014 `}</p>
      <Content6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="relative shrink-0 size-[14px]" data-name="Image/wb_sunny">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[14px]">
          <div className="absolute inset-[2.29%_4.21%_6.46%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p3aad5040} fill="#252C37" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Timeline">
      <Container14 />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-2.67px] left-0 right-[-0.82%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 6">
            <path d={svgPaths.p170a1a80} fill="white" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-end justify-center not-italic px-[20px] md:px-[40px] lg:px-[60px] py-0 relative text-right w-full">
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[15px] relative shrink-0 text-[#f3f9ae] text-[10px] sm:text-[12px] md:text-[14px] text-nowrap tracking-[0.5px] uppercase whitespace-pre">{`Photo Editor & Production Assistant`}</p>
          <div className="font-['Poppins',_sans-serif] leading-[22px] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre">
            <p className="mb-0">{`Freelance & Early `}</p>
            <p>Creative Roles</p>
          </div>
          <p className="font-['Trim',_'Courier_New',_monospace] leading-[17.6px] relative shrink-0 text-[11px] text-white w-full md:w-[313px]">
            {`Started my creative journey editing fashion photography in the mornings and working in a production company in the afternoons. Learned the foundations of composition, storytelling, `}
            <br aria-hidden="true" />
            and visual rhythm.
          </p>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[7px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Timeline7 />
      <Frame8 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[73px] items-center justify-center pl-[74px] pr-0 py-0 relative w-full">
          <Content7 />
          <p className="basis-0 font-['Trim',_'Courier_New',_monospace] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3f9ae] text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.8px] uppercase">2011</p>
        </div>
      </div>
    </div>
  );
}

function Timeline8() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[40px] px-0 relative shrink-0 w-full max-w-[864px]" data-name="Timeline">
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-visible rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] md:px-[60px] lg:px-[124px] py-[40px] relative w-full">
          <Timeline8 />
        </div>
      </div>
    </div>
  );
}

function PillButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="box-border content-stretch flex gap-[10px] h-[32.797px] items-start px-0 py-[8px] relative rounded-[100px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="PillButton"
      onClick={onClick}
    >
      <p className="font-['Trim',_'Courier_New',_monospace] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.32px] uppercase whitespace-pre">See SKILLS</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Navigation/south">
        <div className="absolute inset-[8.33%_22.56%_10.03%_22.57%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
            <path d={svgPaths.p2e3c0a80} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7({ onClickSkills }: { onClickSkills?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-4 top-8 md:left-[174px] md:top-[120px] z-20">
      <p className="font-['Trim',_'Courier_New',_monospace] leading-[28.8px] not-italic relative shrink-0 text-[24px] sm:text-[28px] md:text-[32px] text-nowrap text-white tracking-[0.8px] uppercase whitespace-pre">Timelines</p>
      <PillButton onClick={onClickSkills} />
    </div>
  );
}

export default function TimelineSection({ onClickSkills }: { onClickSkills?: () => void }) {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative w-full md:pt-[80px] md:pb-[300px] lg:pb-[400px] py-[100px] px-[0px]" data-name="ProfilePage">
      {/* Vertical center line */}
      <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 z-0" />
      
      <Container16 />
      <Frame7 onClickSkills={onClickSkills} />
    </div>
  );
}
