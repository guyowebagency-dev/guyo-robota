
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group p-6 bg-zinc-900 border border-white/5 rounded-2xl hover:border-[#00FF00]/30 transition-all duration-500 hover:-translate-y-2">
    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 border border-white/5 text-[#00FF00] group-hover:scale-110 transition-transform duration-500 group-hover:green-glow">
      {icon}
    </div>
    <h3 className="font-monument text-[18px] mb-2.5 leading-tight font-bold">{title}</h3>
    <p className="text-zinc-500 text-[14px] leading-relaxed">{desc}</p>
  </div>
);

const SolutionSection: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  return (
    <div className="py-20 bg-transparent px-6">
      <div className="max-w-6xl mx-auto text-center mb-16 fade-up">
        <h2 className="font-monument text-2xl md:text-[36px] mb-4 leading-[1.2] tracking-tight">
          WE BUILD WEBSITES THAT <br />
          <span className="text-[#00FF00]">BRING YOU CLIENTS</span>
        </h2>
        <p className="text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">This isn't just about professional design. It's about engineering a system that works while you sleep.</p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 fade-up">
        <FeatureCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          title="24/7 SALESPERSON"
          desc="Your website never sleeps and pitches your value perfectly every single time to every visitor."
        />
        <FeatureCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
          title="INSTANT CREDIBILITY"
          desc="Professional design that screams authority so you can command premium prices effortlessly."
        />
        <FeatureCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>}
          title="CLIENT MAGNET"
          desc="Built-in conversion paths that guide visitors naturally from curiosity to 'I need to work with them'."
        />
      </div>
      
      <div className="text-center fade-up">
        <button 
          onClick={onOpenForm}
          className="inline-block bg-[#00FF00] text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-all green-glow-hover"
        >
          BUILD MY WEBSITE THE RIGHT WAY
        </button>
      </div>
    </div>
  );
};

export default SolutionSection;
