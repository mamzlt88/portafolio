export function Profile() {
  const skills = [
    { name: 'UX Design', level: 'Expert' },
    { name: 'DesignOps', level: 'Advanced' },
    { name: 'Product Strategy', level: 'Expert' },
    { name: 'AI Tools', level: 'Intermediate' },
    { name: 'Design Systems', level: 'Expert' },
    { name: 'User Research', level: 'Advanced' }
  ];

  const awards = [
    { year: '2023', title: 'Best UX Innovation', org: 'Design Awards' },
    { year: '2022', title: 'Product Designer of the Year', org: 'Tech Summit' },
    { year: '2020', title: 'Excellence in Design Systems', org: 'UX Conference' }
  ];

  return (
    <section id="profile" className="relative min-h-screen lg:min-h-0 px-[80px] py-[120px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Two column layout */}
        <div className="grid grid-cols-2 gap-[80px]">
          {/* Left column - Title block */}
          <div className="relative">
            <div className="bg-[#e1f40b] rounded-[64px] p-[80px] h-full flex items-center justify-center sticky top-[120px]">
              <h2 className="uppercase tracking-[4px] text-black text-center">
                MY PROFILE
              </h2>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-[64px]">
            {/* Biography */}
            <div>
              <p className="uppercase tracking-[1.5px] text-[#e1f40b] mb-[24px]">
                About
              </p>
              <div className="space-y-[24px] text-white/90">
                <p>
                  I'm a Product Designer and Business Analyst with over 8 years of experience creating impactful digital products. I specialize in bridging the gap between business strategy and user-centered design.
                </p>
                <p>
                  My work spans across fintech, e-commerce, and SaaS platforms, where I've led design systems initiatives, conducted extensive user research, and driven product strategy that resulted in measurable business growth.
                </p>
                <p>
                  I believe in the power of design to solve complex problems and create meaningful experiences that delight users while achieving business objectives.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="uppercase tracking-[1.5px] text-[#e1f40b] mb-[32px]">
                Key Skills
              </p>
              <div className="grid grid-cols-2 gap-[24px]">
                {skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#ddccef] rounded-[24px] p-[24px] hover:bg-[#bd8af0] transition-colors duration-300 cursor-pointer"
                  >
                    <p className="uppercase tracking-[1px] text-black mb-[8px]">
                      {skill.name}
                    </p>
                    <p className="text-black/60">
                      {skill.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div>
              <p className="uppercase tracking-[1.5px] text-[#e1f40b] mb-[32px]">
                Awards & Recognition
              </p>
              <div className="space-y-[24px]">
                {awards.map((award, idx) => (
                  <div 
                    key={idx}
                    className="border-b border-white/20 pb-[24px] last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-[8px]">
                      <p className="uppercase tracking-[1px] text-white">
                        {award.title}
                      </p>
                      <span className="uppercase tracking-[1px] text-[#e1f40b]">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-white/60">
                      {award.org}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <p className="uppercase tracking-[1.5px] text-[#e1f40b] mb-[32px]">
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-[16px]">
                {['Figma', 'Adobe Creative Suite', 'Protopie', 'Miro', 'Jira', 'Notion', 'Midjourney', 'ChatGPT'].map((tool, idx) => (
                  <span 
                    key={idx}
                    className="px-[24px] py-[12px] bg-white/10 backdrop-blur-sm rounded-[16px] uppercase tracking-[1px] text-white hover:bg-white/20 transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-[24px] pt-[32px]">
              <button className="bg-[#ff6b35] text-white px-[48px] py-[20px] rounded-[16px] uppercase tracking-[1.5px] hover:bg-[#ff8555] transition-colors duration-300">
                DOWNLOAD CV
              </button>
              <button className="bg-white text-black px-[48px] py-[20px] rounded-[16px] uppercase tracking-[1.5px] hover:bg-[#e1f40b] transition-colors duration-300">
                CONTACT
              </button>
            </div>

            {/* Contact info */}
            <div className="bg-[#a4b200] rounded-[32px] p-[48px]">
              <p className="uppercase tracking-[1.5px] text-black mb-[24px]">
                Let's Connect
              </p>
              <div className="space-y-[16px]">
                <p className="text-black/80">
                  <span className="uppercase tracking-[1px] mr-[16px]">Email:</span>
                  mariana.machado@design.com
                </p>
                <p className="text-black/80">
                  <span className="uppercase tracking-[1px] mr-[16px]">LinkedIn:</span>
                  /in/mariana-machado
                </p>
                <p className="text-black/80">
                  <span className="uppercase tracking-[1px] mr-[16px]">Location:</span>
                  São Paulo, Brazil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
