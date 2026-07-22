
import React from 'react';

const logos = [
  {
    name: 'Serena Hotels',
    url: 'https://media.licdn.com/dms/image/v2/D4D0BAQEzRAtbP9wwLw/company-logo_200_200/company-logo_200_200/0/1705998903530/serenahotels_logo?e=2147483647&v=beta&t=aMvyqioAsaqhEmAkO-qSlftVqDG8V_jM1821T-tORbg',
  },
  {
    name: 'Tap2Eat',
    url: 'https://cdn.prod.website-files.com/684003440f4e1fba35f37083/6867b98d260dd5e6d3b9f123_Tap2Eat%20%2B%20F4E%20-%20Orange%20Badge%404x.svg',
  },
  {
    name: 'Mascardi',
    url: 'https://images.squarespace-cdn.com/content/v1/5aac1f6a5cfd796d520a4a7a/1573027560311-AFDHMBOTLS7QTDJOA9KB/Logo__Edit.png?format=1500w',
  },
  {
    name: 'VMX FITNESS',
    url: 'https://images.squarespace-cdn.com/content/v1/607c8d29bab4b20ba4778fa4/54cc040d-b735-44ff-8837-c197222213f9/VMX-Logo-Light.png?format=1500w',
  },
  {
    name: 'virgin limited Edition',
    url: 'https://www.virginlimitededition.com/media/tzqj1z0j/logo.svg?quality=70',
  },
  {
    name: 'Absa',
    url: 'https://www.absabank.co.ke/content/dam/kenya/absa/logos/absa-logo-bg.png',
  },
  {
    name: 'BasiGO',
    url: 'https://images.squarespace-cdn.com/content/v1/65a17d6335ed8079ddfc87f9/8297ddd3-2eda-4534-934a-9c7016423c57/BasiGo+Logo.png?format=1500w',
  },
  {
    name: 'Roam Electric',
    url: 'https://cdn.prod.website-files.com/68491dec0c89cd3226833f4f/68491dec0c89cd3226833f72_Logo%20Light.svg',
  },
  {
    name: 'Peach Cars',
    url: 'https://peachcars.co.ke/vite/assets/logo_named-DyR_sVmB.png',
  },
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="font-monument text-xl md:text-2xl text-white tracking-tight uppercase">
          Trusted By Leading Brands
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
