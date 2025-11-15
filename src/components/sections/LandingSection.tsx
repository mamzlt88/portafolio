import imgFashionModel from "figma:asset/3d085c9578974206b02761d0dcb6c75c0648a04d.png";

export function LandingSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="landing" className="relative min-h-screen lg:min-h-0 bg-[#a456f3] flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[1440px] h-screen mx-auto px-[50px]">
        {/* Background color blocks grid - responsive scaled */}
        <div className="absolute gap-[30px] grid grid-cols-2 grid-rows-4 h-[85%] left-[50px] top-[7.5%] right-[50px]">
          <div className="bg-[#f3f9ae] rounded-[80px] md:rounded-[120px] lg:rounded-[150px]" />
          <div className="bg-[#e1f40b] rounded-[80px] md:rounded-[120px] lg:rounded-[150px]" />
          <div className="bg-[#a4b200] rounded-[80px] md:rounded-[120px] lg:rounded-[150px]" />
          <div className="bg-[#636b00] rounded-[80px] md:rounded-[120px] lg:rounded-[150px]" />
          <div className="bg-[#fbfde2] rounded-[80px] md:rounded-[120px] lg:rounded-[150px]" />
          <div className="bg-[#ddccef] rounded-[80px] md:rounded-[120px] lg:rounded-[150px]" />
          <div className="bg-[#8923ee] rounded-[80px] md:rounded-[120px] lg:rounded-[150px]" />
          <div className="bg-[#929292] rounded-[80px] md:rounded-[120px] lg:rounded-[150px]" />
        </div>

        {/* Center fashion model image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[900px] aspect-[2065/2220] z-10">
          <img 
            alt="Mariana Machado" 
            className="w-full h-full object-cover pointer-events-none" 
            src={imgFashionModel} 
          />
        </div>

        {/* Text labels */}
        <button
          onClick={() => scrollToSection('projects')}
          className="absolute font-['Trim_Mono',_'Courier_New',_monospace] right-[80px] md:right-[120px] bottom-[20%] text-[32px] md:text-[48px] lg:text-[56px] text-black tracking-[1.5px] uppercase z-20 hover:text-[#a456f3] transition-colors duration-300 cursor-pointer"
        >
          PROJECTS
        </button>
        <button
          onClick={() => scrollToSection('profile')}
          className="absolute font-['Trim_Mono',_'Courier_New',_monospace] left-[80px] md:left-[120px] top-[30%] text-[32px] md:text-[48px] lg:text-[56px] text-black tracking-[1.5px] uppercase z-20 hover:text-[#a456f3] transition-colors duration-300 cursor-pointer"
        >
          MY PROFILE
        </button>
      </div>
    </section>
  );
}
