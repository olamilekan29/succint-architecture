import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#F4F1EA] pt-20 pb-10 px-6 md:px-12 border-t border-white/5 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl tracking-widest uppercase">Succint</h2>
          <div className="text-xs text-white/40 leading-relaxed tracking-wider uppercase space-y-1">
            <p>Architecture & Design-Build Studio</p>
            <p>Lagos · Abuja · Port Harcourt</p>
            <p>Nigeria</p>
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#C15E2E] text-[10px] tracking-[0.3em] uppercase">Services</h3>
          <ul className="text-sm text-white/60 space-y-3 font-light">
            <li className="hover:text-[#C15E2E] transition-colors cursor-pointer">Architecture</li>
            <li className="hover:text-[#C15E2E] transition-colors cursor-pointer">Design-Build</li>
            <li className="hover:text-[#C15E2E] transition-colors cursor-pointer">Interiors</li>
            <li className="hover:text-[#C15E2E] transition-colors cursor-pointer">Masterplanning</li>
          </ul>
        </div>

        {/* Studio Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#C15E2E] text-[10px] tracking-[0.3em] uppercase">Studio</h3>
          <ul className="text-sm text-white/60 space-y-3 font-light">
            <li className="hover:text-[#C15E2E] transition-colors cursor-pointer">About</li>
            <li className="hover:text-[#C15E2E] transition-colors cursor-pointer">Projects</li>
            <li className="hover:text-[#C15E2E] transition-colors cursor-pointer">Process</li>
            <li className="hover:text-[#C15E2E] transition-colors cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#C15E2E] text-[10px] tracking-[0.3em] uppercase">Contact</h3>
          <div className="text-sm text-white/60 space-y-3 font-light">
            <p className="hover:text-white transition-colors cursor-pointer">hello@succint-arch.ng</p>
            <p className="">+2348035425698</p>
            <div className="pt-2 leading-relaxed">
              <p>3, Ogo Oluwa Close</p>
              <p>Iyana-ipaja Lagos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      {/* <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 tracking-widest uppercase">
        <p>© 2026 Ilé Studio. All Rights Reserved.</p>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;