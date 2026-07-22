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
