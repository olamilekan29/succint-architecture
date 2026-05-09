import hero from "../assets/image/hero.png";


<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&display=swap');
</style>

const Home = () => {
    return (
      <>
      <div className="bg-[#0a0a0a] md:flex grid md:pt-27 pt-15 md:px-14 px-15">
        <div className="md:w-1/2">
            <h1 className="text-white text-6xl leading-[70px] font-sans italic">Architecture <br /> <span className="text-[#C4622D] italic">built</span> for a <br /> new Nigeria.</h1>
            <h3 className="text-[#9B8876] text-sm font-sans mt-4">An architect-led design-build studio crafting homes, <br /> commercial spaces, and public buildings that honour Nigerian <br /> culture and define its future.</h3>
            <button className="text-white text-lg mt-10 bg-[#C4622D] px-14 h-16 rounded-full hover:bg-white hover:text-[#C4622D] cursor-pointer transition-all duration-300">View Our Projects </button>
        </div>
    <div>
        <img src={hero} alt="" />
    </div>
            
  
        </div>
        
      </>
    );
};

export default Home;