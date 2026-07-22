
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className={`text-[17px] md:text-[19px] font-bold font-monument transition-colors tracking-tight ${isOpen ? 'text-[#00FF00]' : 'text-white'}`}>{q}</span>
        <div className={`w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center transition-all ${isOpen ? 'rotate-45 text-[#00FF00] scale-110' : 'text-zinc-500'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-zinc-400 text-[15px] leading-relaxed max-w-3xl">{a}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <div className="pb-20 pt-6 bg-transparent px-6">
      <div className="max-w-4xl mx-auto">
        <div className="fade-up">
          <FAQItem 
            q="DO I REALLY NEED A WEBSITE IF I GET REFERRALS?"
            a="Yes. Your referrals look you up before they call you. If your site looks unprofessional or doesn't exist, you're scaring away the exact people who were already ready to hire you. A great site turns warm leads into guaranteed bookings."
          />
          <FAQItem 
            q="HOW LONG DOES IT TAKE?"
            a="Typically 4 to 6 weeks. We prioritize speed but refuse to compromise on quality. You'll have a fully functioning, high-performance machine in your hands faster than most traditional agencies."
          />
          <FAQItem 
            q="WHAT IF I DON'T KNOW WHAT TO SAY ON THE SITE?"
            a="That's our job. We handle the strategy and copywriting. We extract the gold from your brain and turn it into high-converting sales messaging that resonates with your ideal clients."
          />
          <FAQItem 
            q="IS THIS ONLY FOR CERTAIN INDUSTRIES?"
            a="We work with anyone who sells high-value services or products and needs to build trust at scale. The psychological triggers for buying remain the same—and we know how to pull them."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
