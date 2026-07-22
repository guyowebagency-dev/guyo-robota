
import React from 'react';

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
    <div className="font-mono text-[#00FF00] text-3xl md:text-[48px] mb-2 font-black leading-none">{value}</div>
    <div className="text-zinc-400 font-medium text-[14px] leading-snug">{label}</div>
  </div>
);

const ProblemAwareness: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="fade-up">
          <h2 className="font-monument text-2xl md:text-[36px] mb-5 leading-[1.2] tracking-tight">
            NO WEBSITE = <br />
            <span className="text-zinc-500">LOST CLIENTS YOU'LL NEVER EVEN KNOW ABOUT</span>
          </h2>
          
          <p className="text-zinc-400 text-base mb-8 leading-[1.6] max-w-lg">
            Right now, potential clients are searching for solutions like yours. 
            If your digital presence is non-existent or outdated, you're 
            effectively invisible to them.
          </p>
          
          <div className="space-y-4">
            {[
              "You look less credible to high-ticket clients",
              "You lose trust instantly vs modern competitors",
              "You miss out on higher-value project opportunities",
              "You remain stuck relying ONLY on word-of-mouth"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3.5 group">
                <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <span className="text-[15px] text-zinc-300 font-medium">{point}</span>
              </div>
            ))}
          </div>
          
          <p className="text-[17px] text-zinc-300 font-semibold mt-10">Your competitors are winning your clients by default just because they showed up.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-up">
          <StatBox value="87%" label="check websites before buying anything" />
          <StatBox value="64%" label="won't trust a business without a site" />
          <div className="col-span-full p-6 bg-[#00FF00]/5 border border-[#00FF00]/20 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00FF00]/10 blur-2xl rounded-full"></div>
            <div className="font-monument text-lg mb-3 text-[#00FF00]">THE COST OF INACTION</div>
            <p className="text-[15px] text-zinc-400">Every day you delay is a day you're handing potential revenue directly to your most aggressive competitors.</p>
            <div className="mt-6 flex gap-1.5">
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
