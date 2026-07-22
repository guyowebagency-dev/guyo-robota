
import React from 'react';
import { FloatingPaths } from '@/components/ui/background-paths';
import { CtaGlowContainer } from './SectionDividers';

const FinalCTA: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  return (
    <div className="relative py-20 px-6 overflow-hidden bg-[#0D0F12]">
      {/* Immersive Background */}
      <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10 -z-10"></div>
      
      {/* Floating Paths Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -5 }}>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <CtaGlowContainer className="text-center">
          <div className="max-w-4xl mx-auto py-4">
            <h2 className="font-monument text-3xl md:text-[44px] mb-6 leading-[1.2] tracking-tighter text-white">
              YOUR FUTURE CLIENTS <br />
              ARE ALREADY <br />
              <span className="text-[#76FF39]">LOOKING FOR YOU</span>
            </h2>
            
            <p className="text-[#B0B8C1] text-lg md:text-[18px] mb-12 max-w-xl mx-auto leading-relaxed">
              The only question is whether they'll find you — or your competitors.
              Stop leaving money on the table and start booking more business.
            </p>
            
            <div className="flex flex-col items-center gap-5">
              <button 
                onClick={onOpenForm}
                className="group relative inline-block btn-glow text-black px-12 py-5 rounded-full font-monument text-lg md:text-[16px] font-black transition-all duration-300 hover:scale-105 active:scale-95"
              >
                BOOK MY FREE STRATEGY CALL
                <div className="absolute -top-3 -right-3 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                  LIMITED SPOTS
                </div>
              </button>
              <div className="flex items-center gap-6 text-zinc-500 font-mono text-[13px] font-medium">
                <span>NO OBLIGATION</span>
                <span className="opacity-20">•</span>
                <span>HONEST ADVICE</span>
                <span className="opacity-20">•</span>
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
