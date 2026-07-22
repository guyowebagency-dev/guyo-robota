
import React from 'react';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="group p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-[#00FF00]/20 transition-all duration-500 hover:bg-zinc-900">
    <div className="text-[#00FF00] mb-5 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-monument text-lg md:text-[20px] mb-3 uppercase tracking-tight font-bold">{title}</h3>
    <p className="text-zinc-500 leading-relaxed text-[14px]">{desc}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 fade-up">
          <h2 className="font-monument text-2xl md:text-[36px] mb-4 leading-tight tracking-tight">
            EVERYTHING YOU NEED TO <br />
            <span className="text-[#00FF00]">WIN CLIENTS ONLINE</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 fade-up">
          <ServiceCard 
            title="Design & Development"
            desc="Elite-level visuals combined with high-performance code. Fast, responsive, and pixel-perfect for every device."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>}
          />
          <ServiceCard 
            title="Messaging & Copy"
            desc="Psychology-driven copy that turns passive readers into active leads. We write words that generate revenue."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>}
          />
          <ServiceCard 
            title="Conversion Strategy"
            desc="Building the path of least resistance. Optimizing user flows to maximize your booking and retention rates."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>}
          />
          <ServiceCard 
            title="Ongoing Growth"
            desc="Continuous security, updates, and optimization to ensure your asset stays at peak performance."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
