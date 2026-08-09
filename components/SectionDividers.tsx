import React from 'react';

interface SectionDividerProps {
  label: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ label }) => {
  return (
    <div className="relative w-full overflow-visible select-none" style={{ height: '50px' }}>
      {/* Glow effect container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Massive ambient blurred glow beneath the center flat part */}
        <div 
          className="w-[300px] sm:w-[500px] h-[25px] rounded-full filter blur-[24px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, #76FF39 0%, transparent 80%)',
          }}
        />
      </div>

      {/* SVG Path */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 50"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main neon glow linear gradient */}
          <linearGradient id="dividerGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(118, 255, 57, 0)" />
            <stop offset="28%" stopColor="rgba(118, 255, 57, 0)" />
            <stop offset="35%" stopColor="#76FF39" />
            <stop offset="50%" stopColor="#76FF39" />
            <stop offset="65%" stopColor="#76FF39" />
            <stop offset="72%" stopColor="rgba(118, 255, 57, 0)" />
            <stop offset="100%" stopColor="rgba(118, 255, 57, 0)" />
          </linearGradient>

          {/* Underglow blur path gradient */}
          <linearGradient id="dividerBlurGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="28%" stopColor="transparent" />
            <stop offset="35%" stopColor="rgba(118, 255, 57, 0.5)" />
            <stop offset="50%" stopColor="rgba(118, 255, 57, 0.8)" />
            <stop offset="65%" stopColor="rgba(118, 255, 57, 0.5)" />
            <stop offset="72%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Blur filter for underglow */}
          <filter id="neonGlowBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Deep glowing thick blurred path */}
        <path
          d="M 340,42 L 410,12 L 790,12 L 860,42"
          stroke="url(#dividerBlurGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#neonGlowBlur)"
          opacity="0.6"
        />

        {/* 2. Sharp core neon path */}
        <path
          d="M 340,42 L 410,12 L 790,12 L 860,42"
          stroke="url(#dividerGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Floating Center Badge */}
      <div className="absolute top-[12px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="inline-flex items-center gap-2 bg-[#0D0F12] border border-white/10 px-4 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.9)] backdrop-blur-md hover:border-[#76FF39]/30 transition-all duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#76FF39] animate-pulse shadow-[0_0_8px_#76FF39]" />
          <span className="text-white font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export const SolutionCurvedDivider: React.FC<{ label?: string }> = ({ label = "the solution" }) => {
  return (
    <div className="relative w-full max-w-[1300px] mx-auto px-4 my-4 select-none flex flex-col items-center">
      {/* Container for Glows and SVG */}
      <div className="relative w-full h-[60px] sm:h-[75px] md:h-[85px] flex items-center justify-center">
        
        {/* Layer 4: Deep volumetric cobalt blue & neon green light cloud background glow */}
        <div 
          className="absolute inset-x-0 top-0 h-full pointer-events-none opacity-25 filter blur-[40px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 20%, #0047AB 0%, #00FF00 30%, transparent 75%)',
          }}
        />

        {/* Layer 3: Soft volumetric top bloom spanning ~60% of width */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[50px] pointer-events-none opacity-35 filter blur-[22px]"
          style={{
            background: 'radial-gradient(ellipse at center top, #0047AB 0%, rgba(0, 255, 0, 0.25) 45%, transparent 80%)',
          }}
        />

        {/* Layer 1 & 2 + Matte Metallic Surface SVG */}
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Core Razor-Thin Linear Light Line Gradient */}
            <linearGradient id="solCoreGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0047AB" stopOpacity="0" />
              <stop offset="18%" stopColor="#0047AB" stopOpacity="0.2" />
              <stop offset="32%" stopColor="#00FF00" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="68%" stopColor="#00FF00" stopOpacity="0.8" />
              <stop offset="82%" stopColor="#0047AB" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0047AB" stopOpacity="0" />
            </linearGradient>

            {/* Soft Outer Glow Gradient */}
            <linearGradient id="solGlowGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0047AB" stopOpacity="0" />
              <stop offset="18%" stopColor="#0047AB" stopOpacity="0.25" />
              <stop offset="35%" stopColor="#00FF00" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#00FF00" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#00FF00" stopOpacity="0.5" />
              <stop offset="82%" stopColor="#0047AB" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0047AB" stopOpacity="0" />
            </linearGradient>

            {/* Matte Dark Metallic Fill Gradient */}
            <linearGradient id="solDarkFill" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0E1014" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#08090C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>

            {/* Gaussian Blur Filter */}
            <filter id="solGlowBlur" x="-10%" y="-40%" width="120%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Controlled Bloom Filter */}
            <filter id="solBloomFilter" x="-10%" y="-80%" width="120%" height="260%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>

          {/* Matte Dark Metallic Body below the curve - flat horizontal center spanning ~60% width */}
          <path
            d="M 40,80 C 80,80 130,12 240,12 L 960,12 C 1070,12 1120,80 1160,80 L 1200,80 L 0,80 Z"
            fill="url(#solDarkFill)"
          />

          {/* Layer 3: Controlled Diffused Volumetric Bloom */}
          <path
            d="M 40,80 C 80,80 130,12 240,12 L 960,12 C 1070,12 1120,80 1160,80"
            stroke="url(#solGlowGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#solBloomFilter)"
            opacity="0.35"
          />

          {/* Layer 2: Soft Edge Glow Path */}
          <path
            d="M 40,80 C 80,80 130,12 240,12 L 960,12 C 1070,12 1120,80 1160,80"
            stroke="url(#solGlowGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            filter="url(#solGlowBlur)"
            opacity="0.7"
          />

          {/* Layer 1: Razor-Thin Linear Light Line */}
          <path
            d="M 40,80 C 80,80 130,12 240,12 L 960,12 C 1070,12 1120,80 1160,80"
            stroke="url(#solCoreGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Small dark grey capsule-shaped pill button with green dot and white text */}
        {label && (
          <div className="absolute top-[12px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="inline-flex items-center gap-2 bg-[#121418] border border-white/10 px-4 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.95)] backdrop-blur-md hover:border-[#00FF00]/40 transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse shadow-[0_0_8px_#00FF00]" />
              <span className="text-white font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
                {label}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ArcGlowDivider: React.FC = () => {
  return null;
};

export const CinematicChevronDivider: React.FC = () => {
  return null;
};

interface CtaGlowContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const CtaGlowContainer: React.FC<CtaGlowContainerProps> = ({ children, className = "", id }) => {
  return (
    <div id={id} className={`cta-glow-box ${className}`}>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
