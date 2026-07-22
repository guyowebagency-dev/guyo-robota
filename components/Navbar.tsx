
import React, { useState, useEffect } from 'react';

import Logo from './Logo';

const Navbar: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between border-b ${
        isScrolled 
          ? 'bg-[#0D0F12]/40 border-white/10 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]' 
          : 'bg-[#0D0F12]/10 border-white/[0.03] backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Logo className="h-10 w-auto text-white" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#testimonials" className="text-[13px] font-semibold tracking-widest text-[#B0B8C1] hover:text-[#76FF39] transition-colors uppercase">WORK</a>
          <a href="#services" className="text-[13px] font-semibold tracking-widest text-[#B0B8C1] hover:text-[#76FF39] transition-colors uppercase">SERVICES</a>
          <a href="#process" className="text-[13px] font-semibold tracking-widest text-[#B0B8C1] hover:text-[#76FF39] transition-colors uppercase">PROCESS</a>
          <button onClick={onOpenForm} className="text-[13px] font-semibold tracking-widest text-[#B0B8C1] hover:text-[#76FF39] transition-colors uppercase">CONTACT</button>
        </div>

        <button 
          onClick={onOpenForm}
          className="btn-glow text-black px-6 py-2.5 rounded-full font-bold text-[13px] hover:scale-105 transition-all flex items-center gap-1"
        >
          GET STARTED <span className="text-xs">↗</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
