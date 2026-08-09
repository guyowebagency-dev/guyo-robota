
import React from 'react';

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
    image: "https://static.wixstatic.com/media/aa5266_db50c8dd17424f4fa4585d8296ce7d85~mv2.jpg/v1/fill/w_1826,h_1726,al_c,q_90/20240510_124621_edited.jpg"
  },
  {
    name: "Newton Kimani",
    title: "Mascardi Luxury Cars",
    quote: "Honestly had a great experience through the whole process. They just got our vision immediately. The site fits our brand perfectly and we've had so many compliments since launch.",
    image: "https://i.imgur.com/mLjGLcQ.jpeg"
  },
  {
    name: "Daniel Kang'u",
    title: "General Manager, Nairobi Serena Hotel",
    quote: "We are super happy with the final result. NextRise delivered a beautifully designed website that perfectly reflects who we are. Couldn't recommend them more highly.",
    image: "https://i.ytimg.com/vi/SSE5zENMyfw/sddefault.jpg"
  },
  {
    name: "vallarine akinyi",
    title: "VMX Fitness, The Village Market",
    quote: "By far the easiest team I've worked with. They made the whole process smooth and stress-free — and the website they delivered is sleek, clean, and exactly what we were looking for.",
    image: "https://i.imgur.com/zVoV1g2.png"
  },
  {
    name: "Wawira njiru",
    title: `Wawira Njiru
Founder & Executive Director, Food4Education (Tap2Eat)`,
    quote: "NextRise completely understood the mission behind what we do — feeding over 600,000 children daily deserves a website that tells that story with impact. They delivered exactly that. The site is clean, purposeful, and truly represents who we are. The team is genuinely talented and the work they produce shows it.We're really proud of what they built for us.",
    image: "https://i.imgur.com/CD9IFH6.jpeg"
  },
  {
    name: "Kaoru Kaganoi",
    title: "CEO, Peach Cars",
    quote: "NextRise completely nailed it. They got our vision straight away and built us a website that looks sharp, feels premium, and truly represents Peach Cars. The process was seamless and the results speak for themselves. Without a doubt the best web designers in the country — we're really proud of what they delivered.",
    image: "https://d20plav1k4kerc.cloudfront.net/new_website/about/Kaoru%20Kaganoi.JPG"
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
    <div className="pb-24 pt-6 bg-transparent px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="font-monument text-2xl md:text-[36px] mb-4 tracking-tight uppercase">What Our Clients Say</h2>
          <p className="text-zinc-500 text-base md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            Real feedback from industry leaders who transformed their digital presence with NextRise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="fade-up bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-[#00FF00]/20 transition-all duration-500 hover:bg-zinc-900 group flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StarRating />
              
              <p className="text-zinc-300 text-[15px] leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-[#00FF00]/30 transition-colors">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-monument text-[14px] font-bold text-white tracking-tight">
                    {testimonial.name}
                  </div>
                  <div className="text-[#00FF00] font-mono text-[11px] uppercase tracking-wider mt-1 opacity-70 whitespace-pre-line">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-up mt-16">
          <button 
            onClick={onOpenForm}
            className="text-[#00FF00] font-monument text-xl md:text-2xl hover:underline underline-offset-8 decoration-[#00FF00]/40 transition-all"
          >
            I WANT RESULTS LIKE THIS
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
