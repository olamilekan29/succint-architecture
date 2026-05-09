
  const features = [
    {
      title: "Single Point of Responsibility",
      description: "Architect and builder are the same team",
    },
    {
      title: "Design Integrity Guaranteed",
      description: "No dilution from design to construction",
    },
    {
      title: "Cost & Schedule Certainty",
      description: "Fewer surprises. Faster delivery.",
    },
  ];






const Signature = () =>{
    return(<>
        <div className="bg-[#C15E2E] md:grid md:grid-cols-2 items-center px-8 pt-20">
            <div className=" grid items-center justify-center gap-3">
                <h3 className="text-[#D9A066] font-serif">Signature Service</h3>
                <h1 className="text-[#F4F1EA] font-sans italic text-6xl">Architect-Led <br /> Design-Build</h1>
                <h4 className="text-[#D9A066] font-serif text-sm pt-4">One team. One vision. Total accountability. We manage your project from first <br /> sketch to final handover — eliminating the gap between design intent and built <br /> reality. No contractor surprises. No compromised details.</h4>
            </div>
            
        
        <div className="bg-[#C15E2E] py-16 grid md:w-[500px] gap-3">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="bg-[#A65027] p-3 border-l border-[#F4F1EA]/30 transition-colors hover:border-[#F4F1EA]"
        >
          <h3 className="font-serif text-sm text-[#F4F1EA] mb-2">
            {feature.title}
          </h3>
          <p className="font-serif text-[#D9A066] text-sm opacity-90">
            {feature.description}
          </p>
        </div>
      ))}
    
            </div>
        </div>

    </>)
}
export default Signature