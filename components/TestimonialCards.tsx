
import React from 'react';
import LogoCarousel from './LogoCarousel';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Wilson Odhiambo",
    title: "General Manager, Mahali Mzuri Safari Camp",
    quote: "Big shout out to NextRise for our new site — it's live and we love it! It perfectly captures the experience we offer here at the camp. Really happy with how it turned out.",
    image: "/testimonials/wilson  odhiambi general manager mahali mzuri.jpg"
  },
  {
    name: "Newton Kimani",
    title: "Mascardi Luxury Cars",
    quote: "Honestly had a great experience through the whole process. They just got our vision immediately. The site fits our brand perfectly and we've had so many compliments since launch.",
    image: "/testimonials/newton kimani mascardi luxury cars.jpeg"
  },
  {
    name: "Anthony Chege",
    title: "General Manager, Nairobi Serena Hotel",
    quote: "We are super happy with the final result. NextRise delivered a beautifully designed website that perfectly reflects who we are. Couldn't recommend them more highly.",
    image: "/testimonials/anthony chege.jfif"
  },
  {
    name: "vallarine akinyi",
    title: "VMX Fitness, The Village Market",
    quote: "By far the easiest team I've worked with. They made the whole process smooth and stress-free — and the website they delivered is sleek, clean, and exactly what we were looking for.",
    image: "/testimonials/vallarine akinyi vmx fitness ,the village market.png"
  },
  {
    name: "Wawira njiru",
    title: `Wawira Njiru
Founder & Executive Director, Food4Education (Tap2Eat)`,
    quote: "NextRise completely understood the mission behind what we do — feeding over 600,000 children daily deserves a website that tells that story with impact. They delivered exactly that. The site is clean, purposeful, and truly represents who we are. The team is genuinely talented and the work they produce shows it.We're really proud of what they built for us.",
    image: "/testimonials/Wawira njiru  Founder & Executive Director, Food4Education (Tap2Eat).jpeg"
  },
  {
    name: "Kaoru Kaganoi",
    title: "CEO, Peach Cars",
    quote: "NextRise completely nailed it. They got our vision straight away and built us a website that looks sharp, feels premium, and truly represents Peach Cars. The process was seamless and the results speak for themselves. Without a doubt the best web designers in the country — we're really proud of what they delivered.",
    image: "/testimonials/Kaoru Kaganoi CEO, Peach Cars.jfif"
  }
];

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-orange-500 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCards: React.FC<{ onOpenForm: () => void }> = ({ onOpenForm }) => {
  return (
    <div className="py-16 sm:py-20 md:py-24 bg-transparent px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-up">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
            <span className="text-[#00FF00] font-mono text-[12px] font-semibold tracking-[0.15em] uppercase">TESTIMONIALS</span>
          </div>

          <h2 className="font-sans font-bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] mb-4 leading-[1.1] tracking-[-0.015em] text-white">
            What Our <span className="text-[#00FF00]">Clients Say</span>
          </h2>
          <p className="font-sans font-normal text-[15px] sm:text-[16px] text-white/65 max-w-[560px] mx-auto leading-[1.5]">
            Real feedback from industry leaders who transformed their digital presence with NextRise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="fade-up bg-zinc-900/60 border border-white/5 p-5 sm:p-6 rounded-2xl hover:border-[#00FF00]/20 transition-all duration-500 hover:bg-zinc-900 group flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StarRating />
              
              <p className="text-white/70 text-[13px] sm:text-[14px] leading-[1.5] mb-6 italic font-normal">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3.5 mt-auto pt-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-[#00FF00]/30 transition-colors flex-shrink-0">
                  <a href={testimonial.image} target="_blank" rel="noopener" className="block w-full h-full">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>
                <div>
                  <div className="font-sans text-[14px] sm:text-[15px] font-bold text-white tracking-tight">
                    {testimonial.name}
                  </div>
                  <div className="text-white/50 font-sans text-[12px] sm:text-[13px] font-normal mt-0.5 whitespace-pre-line leading-tight">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-up mt-12 sm:mt-16">
          <button 
            onClick={onOpenForm}
            className="bg-[#00FF00] hover:bg-[#39FF14] text-black px-7 py-3 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_20px_rgba(0,255,0,0.3)]"
          >
            I Want Results Like This
          </button>
        </div>

        {/* Clients, Partners + Experiences Logo Marquee */}
        <div className="fade-up">
          <LogoCarousel />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
