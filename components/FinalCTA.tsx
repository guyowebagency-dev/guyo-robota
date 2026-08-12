
import React from 'react';
import { FloatingPaths } from '@/components/ui/background-paths';
import { CtaGlowContainer } from './SectionDividers';

const FinalCTA: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  return (
    <div className="relative py-16 sm:py-20 md:py-24 px-6 overflow-hidden bg-[#0D0F12]">
      {/* Immersive Background */}
      <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10 -z-10"></div>
      
      {/* Floating Paths Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -5 }}>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <CtaGlowContainer className="text-center">
          <div className="max-w-4xl mx-auto py-4 flex flex-col items-center">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
              <span className="text-[#00FF00] font-mono text-[12px] font-semibold tracking-[0.15em] uppercase">READY TO GROW</span>
            </div>

            <h2 className="font-sans font-bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] mb-4 leading-[1.1] tracking-[-0.015em] text-white">
              Your Future Clients Are Already <span className="text-[#00FF00]">Looking For You</span>
            </h2>
            
            <p className="font-sans font-normal text-[15px] sm:text-[16px] text-white/65 mb-8 max-w-[560px] mx-auto leading-[1.5]">
              The only question is whether they'll find you — or your competitors. Stop leaving money on the table and start booking more business.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={onOpenForm}
                className="group relative bg-[#00FF00] hover:bg-[#39FF14] text-black px-8 py-3.5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              >
                Book My Free Strategy Call
                <div className="absolute -top-2.5 -right-2.5 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-bounce">
                  LIMITED SPOTS
                </div>
              </button>
              
              <div className="flex items-center gap-4 sm:gap-6 text-white/50 font-mono text-[12px] sm:text-[13px] font-medium">
                <span>NO OBLIGATION</span>
                <span className="opacity-30">•</span>
                <span>HONEST ADVICE</span>
                <span className="opacity-30">•</span>
                <span>CLEAR NEXT STEPS</span>
              </div>
            </div>
          </div>
        </CtaGlowContainer>
      </div>
    </div>
  );
};

export default FinalCTA;
