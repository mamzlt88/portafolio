import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'High Neck',
      subtitle: "Longsleeve in 'Vison'",
      category: 'Fashion Design',
      year: '2024',
      color: '#a8a89d',
      image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYxOTAyMjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Urban Collection',
      subtitle: 'Contemporary Streetwear',
      category: 'Product Design',
      year: '2024',
      color: '#ddccef',
      image: 'https://images.unsplash.com/photo-1640901555365-cbbb76b0009b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBmYXNoaW9ufGVufDF8fHx8MTc2MTk0MzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Editorial Series',
      subtitle: 'Seasonal Campaign 2024',
      category: 'Art Direction',
      year: '2024',
      color: '#e1f40b',
      image: 'https://images.unsplash.com/photo-1645996830739-8fe3df27c33f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc2MTg1MjA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Minimal Essentials',
      subtitle: 'Capsule Wardrobe',
      category: 'Fashion Design',
      year: '2023',
      color: '#a4b200',
      image: 'https://images.unsplash.com/photo-1557777586-f6682739fcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWdufGVufDF8fHx8MTc2MTkwMDkyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Textile Innovation',
      subtitle: 'Sustainable Materials',
      category: 'Research & Design',
      year: '2023',
      color: '#8923ee',
      image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYxOTAyMjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Brand Identity',
      subtitle: 'Visual Language System',
      category: 'Brand Design',
      year: '2023',
      color: '#636b00',
      image: 'https://images.unsplash.com/photo-1557777586-f6682739fcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWdufGVufDF8fHx8MTc2MTkwMDkyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-[#a456f3] px-[40px] py-[80px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Projects grid - brutalist minimal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href="#"
              className="group block rounded-[40px] overflow-hidden relative cursor-pointer transition-all duration-300 hover:scale-[1.02] aspect-[4/5]"
              style={{ backgroundColor: project.color }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-[32px] md:p-[40px]">
                {/* Category badge */}
                <div className="flex justify-between items-start">
                  <span className="font-['Trim',_'Courier_New',_monospace] uppercase tracking-[1px] text-white/70 text-[12px] md:text-[14px]">
                    {project.category}
                  </span>
                  <span className="font-['Trim',_'Courier_New',_monospace] text-white/50 text-[12px] md:text-[14px]">
                    {project.year}
                  </span>
                </div>

                {/* Title and arrow */}
                <div>
                  <h3 className="font-['Poppins',_sans-serif] text-[28px] md:text-[36px] lg:text-[42px] text-black mb-[8px] leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="font-['Poppins',_sans-serif] text-[16px] md:text-[18px] text-black/80">
                      {project.subtitle}
                    </p>
                    <ArrowUpRight 
                      className="text-black opacity-60 group-hover:opacity-100 group-hover:translate-x-[4px] group-hover:translate-y-[-4px] transition-all duration-300" 
                      size={28}
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
