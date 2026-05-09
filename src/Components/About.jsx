

const items = [
  "INTERIOR DESIGN",
  "MASTERPLANNING",
  "RENOVATION",
  "ARCHITECTURE",
  "ARCHITECT-LED DESIGN-BUILD"
];

const About = () => {
  return (
    <div className="grid bg-[#0a0a0a]">
    
    <div className="overflow-hidden bg-[#0a0a0a] py-4 border-y border-[#bfa37e]/20">
      <div className="flex w-max animate-marquee">
        {/* Render multiple times for seamless loop on large screens */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center justify-center whitespace-nowrap px-6">
            <span className="text-[#bfa37e] text-sm tracking-[0.2em] font-medium">{item}</span>
            <span className="mx-6 text-[#C4622D] text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>

        <div className=" md:flex grid items-center justify-between py-25 px-10">
            <h2 className="text-[#C4622D] relative w-fit pb-2 font-serif text-xl  
               after:absolute after:bottom-0 after:left-1/2 after:h-[2px] 
               after:w-12 after:-translate-x-1/2 after:bg-[#bfa37e] after:content-[''] mb-5">
                About the Company</h2>

            <span className="">
                <h1 className="text-white pb-8 text-3xl">"Nigerian spaces should tell Nigerian stories — through form, <br /> material, and light."</h1>
                <h2 className="text-[#9B8876] text-sm">Succint Architecture is a Nigerian-based architecture and design-build practice. We work with residential and  commercial clients <br /> across Nigeria to conceive,  design, and deliver buildings that are beautiful, functional, and deeply rooted in their context.</h2>
            </span>
        </div>
    </div>
  );
};

export default About;