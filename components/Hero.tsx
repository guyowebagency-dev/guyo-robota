
import React from 'react';

const Hero: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  return (
    <div 
      className="relative min-h-[90vh] pt-[120px] sm:pt-[140px] pb-[80px] sm:pb-[100px] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#0D0F12]"
    >
      <div className="fade-up max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 gap-4 sm:gap-5">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <svg className="w-3.5 h-3.5 text-[#00FF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          </svg>
          <span className="text-[#00FF00] font-mono text-[12px] sm:text-[13px] font-semibold tracking-[0.15em] uppercase">
            WEBSITES THAT CONVERT
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="font-sans font-bold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[56px] leading-[1.1] tracking-[-0.015em] text-white max-w-3xl">
          Get More Clients With a <span className="text-[#00FF00]">Website That Sells</span> For You
        </h1>
        
        {/* Subheading */}
        <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.5] text-white/65 max-w-[560px] mx-auto text-center">
          We design high-converting websites for serious businesses that want more clients, more trust, and real growth — without tech headaches.
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <button 
            onClick={onOpenForm}
            className="group relative bg-[#00FF00] hover:bg-[#39FF14] text-black px-7 py-3 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] flex items-center gap-2"
          >
            <span>Get My Website Built</span>
            <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
          <p className="text-white/40 font-mono text-[12px] tracking-wide">
            Free strategy call • No pressure • Honest advice
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 animate-bounce">
        <span className="font-mono text-[10px] uppercase tracking-widest vertical-text text-white">Scroll</span>
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#00FF00] animate-[slide_2s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
};

export default Hero;
