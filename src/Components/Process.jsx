const Process = () => {
  const phases = [
    {
      id: "01",
      title: "Discovery & Brief",
      description: "Site visits, client interviews, budget benchmarking, regulatory review",
    },
    {
      id: "02",
      title: "Design Development",
      description: "Concept, schematic design, planning drawings, client sign-offs",
    },
    {
      id: "03",
      title: "Construction",
      description: "Architect-led site team, quality control, progress reporting",
    },
    {
      id: "04",
      title: "Handover",
      description: "Snagging, as-built documentation, post-occupancy review",
    },
  ];

  const stats = [
    { value: "47+", label: "Projects Delivered" },
    { value: "6+", label: "Years in Practice" },
    { value: "3", label: "Nigerian Cities" },
    { value: "100%", label: "Design-Build Ready" },
  ];

  return (
    <section className="bg-[#0a0a0a] text-[#F4F1EA] px-6 md:px-12 py-20 font-serif">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-[#C15E2E] text-xs tracking-[0.3em] uppercase mb-4">How We Work</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl">The Design-Build Process</h2>
      </div>

      {/* Phases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12">
        {phases.map((phase) => (
          <div key={phase.id} className="border-l border-white/10 pl-6 lg:pl-8 group">
            <p className="text-white/30 text-[10px] tracking-widest uppercase mb-6">Phase {phase.id}</p>
            
            {/* The Accent Square Box */}
            <div className="w-10 h-10 border border-[#C15E2E] flex items-center justify-center mb-8">
              <div className="w-2 h-2 bg-[#C15E2E]" />
            </div>

            <h3 className="text-xl mb-4 group-hover:text-[#C15E2E] transition-colors duration-300">
              {phase.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-[200px]">
              {phase.description}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Section with Divider */}
      <div className="mt-24 pt-16 border-t border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col border-l lg:border-l-0 lg:first:border-l-0 lg:border-r last:border-r-0 border-white/10 pl-6">
              <span className="text-5xl md:text-6xl lg:text-7xl text-[#C15E2E] mb-2 font-light">
                {stat.value}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;