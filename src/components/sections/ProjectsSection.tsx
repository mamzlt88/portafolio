import imgFashionModel from "figma:asset/3d085c9578974206b02761d0dcb6c75c0648a04d.png";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen bg-[#a456f3] flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[1440px] h-screen mx-auto px-[50px]">
        {/* Large yellow/lime block */}
        <div className="absolute bg-[#e1f40b] h-[75%] left-[80px] rounded-[80px] md:rounded-[120px] lg:rounded-[150px] top-[12.5%] right-[80px]" />
        
        {/* Fashion model image - positioned on left */}
        <div className="absolute h-full left-[-15%] md:left-[-10%] top-0 w-[55%] md:w-[50%] z-10">
          <img 
            alt="Portfolio Work" 
            className="w-full h-full object-cover object-center pointer-events-none" 
            src={imgFashionModel} 
          />
        </div>

        {/* Text label */}
        <p className="absolute font-['Trim_Mono',_'Courier_New',_monospace] right-[120px] md:right-[180px] bottom-[15%] text-[32px] md:text-[40px] lg:text-[48px] text-black tracking-[1.12px] uppercase z-20">
          MY PROFILE
        </p>
      </div>
    </section>
  );
}
