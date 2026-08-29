
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
    <div className="pt-16 sm:pt-20 md:pt-24 pb-8 bg-transparent overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 mb-8 sm:mb-10 text-center">
        <h3 className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white tracking-tight">
          Clients, Partners + Experiences
        </h3>
        <div className="w-16 sm:w-20 h-1 bg-[#00FF00] mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </div>

      <div 
        className="relative flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] py-2">
          {/* Quadrupled list to guarantee smooth continuous loop across ultra-wide viewports */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="mx-8 sm:mx-12 md:mx-16 flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-9 sm:h-11 md:h-13 max-w-[140px] sm:max-w-[170px] md:max-w-[200px] object-contain transition-opacity duration-300"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;

