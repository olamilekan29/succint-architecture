import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0a0a0a] md:px-10 px-5">
      <div className="h-18 items-center flex justify-between">
        <div className="text-3xl text-[#B58B5E] font-bold">Succint Arc</div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center">
          <a href="#Home" className="text-[#B58B5E] text-lg px-4">Home</a>
          <a href="#About" className="text-[#B58B5E] text-lg px-4">Services</a>
          <a href="#Skills" className="text-[#B58B5E] text-lg px-4">About</a>
          <a href="#Projects" className="text-[#B58B5E] text-lg px-4">Process</a>
          
        </div>
         <button className="text-[#B58B5E] border-white text-lg">Contact</button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="block sm:hidden px-4 text-3xl text-[#B58B5E] cursor-pointer"
        >
          <CiMenuBurger />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#0a0a0a] z-50 transform transition-transform duration-300 ease-in-out sm:hidden 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-3xl text-gray-700 cursor-pointer"
        >
          <RxCross1 />
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#Home" onClick={() => setIsOpen(false)} className="text-[#B58B5E] text-2xl">Home</a>
          <a href="#Home" onClick={() => setIsOpen(false)} className="text-[#B58B5E] text-2xl">Services</a>
          <a href="#About" onClick={() => setIsOpen(false)} className="text-[#B58B5E] text-2xl">About</a>
          <a href="#Skills" onClick={() => setIsOpen(false)} className="text-[#B58B5E] text-2xl">Process</a>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
