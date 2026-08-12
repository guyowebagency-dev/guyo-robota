
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group p-5 sm:p-6 bg-zinc-900/60 border border-white/5 rounded-2xl hover:border-[#00FF00]/30 transition-all duration-500 hover:-translate-y-1">
    <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center mb-5 border border-white/5 text-[#00FF00] group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="font-sans font-bold text-[15px] mb-2 leading-tight text-white">{title}</h3>
    <p className="text-white/65 text-[13px] sm:text-[14px] leading-[1.5]">{desc}</p>
  </div>
);

const SolutionSection: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  return (
    <div className="py-16 sm:py-20 md:py-24 bg-transparent px-6">
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16 fade-up">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md mb-3 sm:mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
          <span className="text-[#00FF00] font-mono text-[12px] font-semibold tracking-[0.15em] uppercase">THE SOLUTION</span>
        </div>

        <h2 className="font-sans font-bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] mb-4 leading-[1.1] tracking-[-0.015em] text-white">
          We Build Websites That <span className="text-[#00FF00]">Bring You Clients</span>
        </h2>
        <p className="font-sans font-normal text-[15px] sm:text-[16px] text-white/65 max-w-[560px] mx-auto leading-[1.5]">
          This isn't just about professional design. It's about engineering a system that works while you sleep.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 fade-up">
        <FeatureCard 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          title="24/7 Salesperson"
          desc="Your website never sleeps and pitches your value perfectly every single time to every visitor."
        />
        <FeatureCard 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
          title="Instant Credibility"
          desc="Professional design that screams authority so you can command premium prices effortlessly."
        />
        <FeatureCard 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>}
          title="Client Magnet"
          desc="Built-in conversion paths that guide visitors naturally from curiosity to 'I need to work with them'."
        />
      </div>
      
      <div className="text-center fade-up">
        <button 
          onClick={onOpenForm}
          className="bg-[#00FF00] hover:bg-[#39FF14] text-black px-7 py-3 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_20px_rgba(0,255,0,0.3)]"
        >
          Build My Website The Right Way
        </button>
      </div>
    </div>
  );
};

export default SolutionSection;
