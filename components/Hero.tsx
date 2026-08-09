
import React from 'react';

const Hero: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  return (
    <div 
      className="relative min-h-[90vh] pt-[120px] pb-[80px] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#0D0F12]"
    >
      <div className="fade-up max-w-4xl relative z-10">
        <p className="font-mono text-[#00FF00] text-[11px] tracking-[0.2em] mb-4 uppercase font-medium">
          Websites That Convert
        </p>
        
        <h1 className="font-monument text-[28px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.15] mb-5 tracking-tight">
          GET MORE CLIENTS <br />
          WITH A <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00FF00] to-white">WEBSITE THAT SELLS FOR YOU</span>
        </h1>
        
        <p className="text-zinc-400 text-base md:text-[17px] max-w-2xl mx-auto mb-8 leading-[1.6] font-normal">
          We design high-converting websites for serious businesses 
          that want more clients, more trust, and real growth — 
          without tech headaches or guesswork.
        </p>
        
        <div className="flex flex-col items-center gap-3">
          <button 
            onClick={onOpenForm}
            className="group relative bg-[#00FF00] text-black px-9 py-3.5 rounded-full font-bold text-sm tracking-widest green-glow-hover transition-all duration-300 hover:scale-105 active:scale-95"
          >
            GET MY WEBSITE BUILT
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
          </button>
          <p className="text-zinc-500 font-mono text-[13px] opacity-70">
            Free strategy call • No pressure • Honest advice
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 animate-bounce">
        <span className="font-mono text-[10px] uppercase tracking-widest vertical-text">Scroll</span>
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
