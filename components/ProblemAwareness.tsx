
import React from 'react';

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl">
    <div className="font-sans text-[#00FF00] text-3xl md:text-[42px] mb-2 font-bold leading-none">{value}</div>
    <div className="text-white/65 text-[13px] sm:text-[14px] leading-[1.5]">{label}</div>
  </div>
);

const ProblemAwareness: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="fade-up">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 font-mono text-[12px] font-semibold tracking-[0.15em] uppercase">THE PROBLEM</span>
          </div>

          <h2 className="font-sans font-bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] mb-4 leading-[1.1] tracking-[-0.015em] text-white">
            No Website = <span className="text-[#00FF00]">Lost Clients</span> You'll Never Know About
          </h2>
          
          <p className="font-sans font-normal text-[15px] sm:text-[16px] text-white/65 leading-[1.5] mb-6 max-w-lg">
            Right now, potential clients are searching for solutions like yours. If your digital presence is non-existent or outdated, you're effectively invisible to them.
          </p>
          
          <div className="space-y-3.5">
            {[
              "You look less credible to high-ticket clients",
              "You lose trust instantly vs modern competitors",
              "You miss out on higher-value project opportunities",
              "You remain stuck relying ONLY on word-of-mouth"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3.5 group">
                <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <span className="text-[14px] sm:text-[15px] text-white/80 font-normal leading-[1.5]">{point}</span>
              </div>
            ))}
          </div>
          
          <p className="text-[15px] text-white/90 font-semibold mt-8 leading-[1.5]">Your competitors are winning your clients by default just because they showed up.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-up">
          <StatBox value="87%" label="check websites before buying anything" />
          <StatBox value="64%" label="won't trust a business without a site" />
          <div className="col-span-full p-5 sm:p-6 bg-[#00FF00]/5 border border-[#00FF00]/20 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00FF00]/10 blur-2xl rounded-full"></div>
            <div className="font-sans font-bold text-[15px] sm:text-[16px] mb-2 text-[#00FF00]">THE COST OF INACTION</div>
            <p className="text-[13px] sm:text-[14px] text-white/65 leading-[1.5]">Every day you delay is a day you're handing potential revenue directly to your most aggressive competitors.</p>
            <div className="mt-5 flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                  <svg className="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                </div>
              ))}
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemAwareness;
