import imgFashionModel from "figma:asset/3d085c9578974206b02761d0dcb6c75c0648a04d.png";

export function DetailSection() {
  return (
    <section id="profile" className="relative min-h-screen bg-[#a456f3] py-[80px] overflow-hidden">
      <div className="relative w-full max-w-[1920px] mx-auto px-[50px]">
        {/* Background color blocks grid - 5 columns */}
        <div className="grid grid-cols-5 gap-[30px] md:gap-[40px] lg:gap-[50px] mb-[80px]">
          <div className="bg-[#f3f9ae] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-[#e1f40b] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-[#a4b200] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-[#636b00] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-[#fbfde2] rounded-[80px] md:rounded-[120px] aspect-square" />
          
          <div className="bg-[#ddccef] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="relative bg-[#a456f3] rounded-[80px] md:rounded-[120px] aspect-square border border-black" />
          <div className="bg-[#8923ee] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-[#600fb2] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-[#bd8af0] rounded-[80px] md:rounded-[120px] aspect-square" />
          
          <div className="bg-[#edece4] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-[#dddccd] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-[#929292] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-[#4f4e4a] rounded-[80px] md:rounded-[120px] aspect-square" />
          <div className="bg-transparent aspect-square" />
        </div>

        {/* Content sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] mt-[-300px] relative z-10">
          {/* Left column - Project description */}
          <div className="space-y-[60px]">
            {/* Hero text */}
            <div className="bg-white/90 backdrop-blur-sm rounded-[48px] p-[48px]">
              <h2 className="font-['Trim_Mono',_'Courier_New',_monospace] text-[32px] md:text-[48px] lg:text-[56px] text-black tracking-[1.6px] uppercase mb-[32px]">
                MY PROFILE
              </h2>
              <p className="text-[18px] md:text-[24px] text-black/80 leading-[1.4]">
                We modernized a White Label Payment Gateway with clients on the finance, automotive, and health industries, focusing on loan repayments. The platform had outdated visuals and poor UX. Over two years, we created a customizable design system, significantly enhancing its appearance and usability.
              </p>
            </div>

            {/* Challenge section */}
            <div className="bg-[#e1f40b] rounded-[48px] p-[48px]">
              <p className="font-['Trim_Mono',_'Courier_New',_monospace] text-[24px] md:text-[32px] text-black tracking-[0.8px] uppercase mb-[16px]">
                The Challenge
              </p>
              <h3 className="text-[28px] md:text-[36px] text-black mb-[24px]">
                Visuals, Branding, & User Experience
              </h3>
              <p className="text-[18px] md:text-[24px] text-black/80 leading-[1.5]">
                The project faced outdated visuals, limited branding, and a poor user experience, risking client loss to competitors. Time, budget, and technology constraints required careful management to deliver effective solutions.
              </p>
            </div>
          </div>

          {/* Right column - Project details table */}
          <div className="space-y-[60px]">
            {/* Project table */}
            <div className="bg-white/90 backdrop-blur-sm rounded-[48px] p-[48px]">
              <div className="space-y-[24px]">
                <div className="border-b border-black/20 pb-[24px]">
                  <p className="font-['Trim_Mono',_'Courier_New',_monospace] text-[20px] md:text-[28px] text-black uppercase mb-[8px]">
                    Client
                  </p>
                  <p className="text-[20px] md:text-[28px] text-black">
                    PAYET
                  </p>
                </div>
                <div className="border-b border-black/20 pb-[24px]">
                  <p className="font-['Trim_Mono',_'Courier_New',_monospace] text-[20px] md:text-[28px] text-black uppercase mb-[8px]">
                    Sector
                  </p>
                  <p className="text-[20px] md:text-[28px] text-black">
                    Payment
                  </p>
                </div>
                <div className="border-b border-black/20 pb-[24px]">
                  <p className="font-['Trim_Mono',_'Courier_New',_monospace] text-[20px] md:text-[28px] text-black uppercase mb-[8px]">
                    Skill
                  </p>
                  <p className="text-[20px] md:text-[28px] text-black">
                    UX and UI Design
                  </p>
                </div>
                <div className="border-b border-black/20 pb-[24px]">
                  <p className="font-['Trim_Mono',_'Courier_New',_monospace] text-[20px] md:text-[28px] text-black uppercase mb-[8px]">
                    Timeframe
                  </p>
                  <p className="text-[20px] md:text-[28px] text-black">
                    2018 - 2020
                  </p>
                </div>
                <div className="pb-[24px]">
                  <p className="font-['Trim_Mono',_'Courier_New',_monospace] text-[20px] md:text-[28px] text-black uppercase mb-[8px]">
                    Solution
                  </p>
                  <p className="text-[20px] md:text-[28px] text-black">
                    Design System & Re-Design
                  </p>
                </div>
              </div>
            </div>

            {/* Work section */}
            <div className="bg-[#161616] rounded-[48px] p-[48px]">
              <h3 className="font-['Trim_Mono',_'Courier_New',_monospace] text-[32px] md:text-[48px] text-white tracking-[1.6px] uppercase mb-[24px]">
                MY WORK
              </h3>
              <p className="font-['Trim_Mono',_'Courier_New',_monospace] text-[20px] md:text-[28px] text-white/70 uppercase mb-[16px]">
                The Challenge
              </p>
              <h4 className="text-[24px] md:text-[32px] text-white mb-[16px]">
                Visuals, Branding, & User Experience
              </h4>
              <p className="text-[18px] md:text-[24px] text-white/80 leading-[1.5]">
                The project faced outdated visuals, limited branding, and a poor user experience, risking client loss to competitors. Time, budget, and technology constraints required careful management to deliver effective solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Fashion model image - positioned */}
        <div className="absolute right-[50px] top-[100px] w-[400px] md:w-[500px] lg:w-[600px] aspect-[2065/2220] z-0 opacity-60">
          <img 
            alt="Portfolio" 
            className="w-full h-full object-cover pointer-events-none" 
            src={imgFashionModel} 
          />
        </div>
      </div>
    </section>
  );
}
