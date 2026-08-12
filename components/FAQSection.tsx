
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0 py-1">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-5 flex items-center justify-between text-left group gap-4"
      >
        <span className={`text-[15px] sm:text-[16px] font-bold font-sans transition-colors tracking-tight ${isOpen ? 'text-[#00FF00]' : 'text-white'}`}>{q}</span>
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-900 flex items-center justify-center transition-all flex-shrink-0 ${isOpen ? 'rotate-45 text-[#00FF00] scale-110' : 'text-zinc-500'}`}>
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-white/65 text-[13px] sm:text-[14px] leading-[1.5] max-w-3xl">{a}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 bg-transparent px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-up">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
            <span className="text-[#00FF00] font-mono text-[12px] font-semibold tracking-[0.15em] uppercase">FAQ</span>
          </div>

          <h2 className="font-sans font-bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] mb-4 leading-[1.1] tracking-[-0.015em] text-white">
            Frequently Asked <span className="text-[#00FF00]">Questions</span>
          </h2>
          <p className="font-sans font-normal text-[15px] sm:text-[16px] text-white/65 max-w-[560px] mx-auto leading-[1.5]">
            Everything you need to know about working with us to build your high-converting website.
          </p>
        </div>

        <div className="fade-up bg-zinc-900/40 border border-white/5 rounded-2xl p-5 sm:p-8">
          <FAQItem 
            q="Do I really need a website if I get referrals?"
            a="Yes. Your referrals look you up before they call you. If your site looks unprofessional or doesn't exist, you're scaring away the exact people who were already ready to hire you. A great site turns warm leads into guaranteed bookings."
          />
          <FAQItem 
            q="How long does it take?"
            a="Typically 4 to 6 weeks. We prioritize speed but refuse to compromise on quality. You'll have a fully functioning, high-performance machine in your hands faster than most traditional agencies."
          />
          <FAQItem 
            q="What if I don't know what to say on the site?"
            a="That's our job. We handle the strategy and copywriting. We extract the gold from your brain and turn it into high-converting sales messaging that resonates with your ideal clients."
          />
          <FAQItem 
            q="Is this only for certain industries?"
            a="We work with anyone who sells high-value services or products and needs to build trust at scale. The psychological triggers for buying remain the same—and we know how to pull them."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
