import React from 'react';
import lekki from "../assets/image/lekki.jpeg";
import maitama from "../assets/image/maitama.jpg";
import port from "../assets/image/port.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      tag: "RESIDENTIAL · LAGOS",
      title: "Lekki Phase I Residence",
      category: "Design-Build · 2023",
      area: "4,800 sqm",
      image: lekki,
      featured: true,
    },
    {
      id: 2,
      tag: "COMMERCIAL · ABUJA",
      title: "Maitama Office Tower",
      category: "Architecture · 2022",
      area: "12,000 sqm",
      image: maitama, 
      featured: false,
    },
    {
      id: 3,
      tag: "CIVIC · PORT HARCOURT",
      title: "Cultural Centre PH",
      category: "Design-Build · 2024",
      area: "8,200 sqm",
      image: port, 
      featured: false,
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-[#F4F1EA] px-8 py-16 font-serif">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
        <div>
          <p className="text-[#C15E2E] text-xs tracking-[0.3em] uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl">Selected Works</h2>
        </div>
        <button className="text-xs tracking-widest uppercase border-b border-[#C15E2E] pb-1 hover:text-[#C15E2E] transition-colors">
          View All &rarr;
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/10 overflow-hidden">
        
        {/* Main Featured Project (Left 2 columns) */}
        <div className="lg:col-span-2 border-r border-white/10 group cursor-pointer overflow-hidden">
          <div className="h-[450px] relative flex flex-col justify-end">
            {/* Project Image */}
            <img 
              src={projects[0].image} 
              alt={projects[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Vignette Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="relative z-10 p-10">
              <p className="text-[#C15E2E] text-[10px] tracking-[0.2em] uppercase mb-2">{projects[0].tag}</p>
              <h3 className="text-4xl max-w-sm leading-tight">{projects[0].title}</h3>
            </div>
          </div>
          <div className="flex justify-between items-center p-6 bg-[#0d0d0d] border-t border-white/10 text-xs text-white/50 tracking-wider">
            <span>{projects[0].category}</span>
            <span>{projects[0].area}</span>
          </div>
        </div>

        {/* Sidebar Projects (Right 1 column) */}
        <div className="flex flex-col">
          {projects.slice(1).map((project, idx) => (
            <div key={project.id} className={`group cursor-pointer overflow-hidden ${idx === 0 ? 'border-b border-white/10' : ''}`}>
              <div className="h-[225px] relative flex flex-col justify-end">
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 p-8">
                  <p className="text-[#C15E2E] text-[10px] tracking-[0.2em] uppercase mb-1">{project.tag}</p>
                  <h3 className="text-xl">{project.title}</h3>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#0d0d0d] text-[10px] text-white/40 tracking-wider">
                <span>{project.category}</span>
                <span>{project.area}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;