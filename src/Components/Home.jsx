import hero from "../assets/image/hero.png";

const Home = () => {
  return (
    <section className="bg-[#0a0a0a] flex flex-col md:flex-row items-center justify-between pt-24 md:pt-32 pb-16 md:pb-0 px-6 md:px-12 lg:px-20 gap-12 md:gap-8 min-h-[90vh]">
      <div className="w-full md:w-1/2 z-10 flex flex-col items-start text-left">
        <h1 className="text-white text-5xl md:text-6xl lg:text-[5rem] leading-tight md:leading-[1.1] font-sans italic">
          Architecture <br className="hidden md:block" /> 
          <span className="text-[#C4622D] italic">built</span> for a <br className="hidden md:block" /> 
          new Nigeria.
        </h1>
        <p className="text-[#9B8876] text-base font-sans mt-6 max-w-lg leading-relaxed">
          An architect-led design-build studio crafting homes, commercial spaces, and public buildings that honour Nigerian culture and define its future.
        </p>
        <button className="text-white text-xs md:text-sm tracking-[0.2em] mt-10 bg-[#C4622D] px-10 py-5 rounded-full hover:bg-white hover:text-[#C4622D] cursor-pointer transition-all duration-300 font-bold uppercase">
          View Our Projects
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={hero} 
          alt="Hero representation of architecture" 
          className="w-full max-w-md md:max-w-xl lg:max-w-2xl object-cover hover:scale-105 transition-transform duration-700" 
        />
      </div>
    </section>
  );
};

export default Home;