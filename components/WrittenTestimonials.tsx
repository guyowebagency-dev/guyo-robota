
import React from 'react';

const testimonials = [
  { quote: "The best investment we made this year.", name: "Alex P." },
  { quote: "Finally a website that actually works.", name: "Sarah J." },
  { quote: "Doubled our leads in 30 days.", name: "Mike T." },
  { quote: "Absolute game changer for our brand.", name: "Elena R." },
  { quote: "The conversion rate is mind-blowing.", name: "David L." },
];

const WrittenTestimonials: React.FC = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-black overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="flex items-center gap-4 px-10 group">
            <span className="text-[#00FF00] font-monument text-xl opacity-40">"</span>
            <span className="font-monument text-lg md:text-[18px] text-zinc-300 group-hover:text-white transition-colors uppercase tracking-tight font-bold">
              {t.quote}
            </span>
            <span className="font-mono text-zinc-600 text-[13px]">— {t.name}</span>
            <div className="w-8 h-[1px] bg-zinc-800 ml-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WrittenTestimonials;
