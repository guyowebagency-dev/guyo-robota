
import React from 'react';

const logos = [
  {
    name: 'Absa',
    url: '/assets/img/marq-01.png',
  },
  {
    name: 'BasiGO',
    url: '/assets/img/marq-02.png',
  },
  {
    name: 'Virgin Limited Edition',
    url: '/assets/img/marq-03.png',
  },
  {
    name: 'Tap2Eat',
    url: '/assets/img/marq-04.png',
  },
  {
    name: 'Mascardi',
    url: '/assets/img/marq-05.png',
  },
  {
    name: 'easycoach',
    url: '/assets/img/marq-06.png',
  },
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight">
          Clients, Partners + Experiences
        </h2>
        <div className="w-20 h-1 bg-[#00FF00] mx-auto mt-4"></div>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-12 flex items-center justify-center min-w-[150px]">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-10 md:h-14 object-contain transition-all duration-500 opacity-80 hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
