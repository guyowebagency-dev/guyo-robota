import React from 'react';

interface WorthItTransitionProps {
  label?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const WorthItTransition: React.FC<WorthItTransitionProps> = ({
  label,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`relative w-full h-[120px] sm:h-[160px] md:h-[180px] bg-transparent overflow-hidden select-none flex items-center justify-between ${className}`}>
      {/* LEFT WING */}
      <div className="absolute left-0 top-0 h-full w-[28%] md:w-[25%] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 300 240"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft electric-green glow gradient inside the left wing */}
            <radialGradient
              id="leftGlow"
              cx="30"
              cy="40"
              r="220"
              fx="30"
              fy="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#00FF00" stopOpacity="0.38" />
              <stop offset="35%" stopColor="#76FF39" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#00FF00" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Stroke gradient that fades out along the diagonal */}
            <linearGradient
              id="leftStrokeGrad"
              x1="12"
              y1="40"
              x2="300"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.14)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.08)" />
              <stop offset="80%" stopColor="rgba(255, 255, 255, 0.02)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>

            {/* Premium vertical fade mask to completely eliminate any blocky or harsh cutoff edges */}
            <linearGradient
              id="leftVerticalFade"
              x1="0"
              y1="0"
              x2="0"
              y2="240"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="6%" stopColor="#000000" stopOpacity="0" />
              <stop offset="16%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="65%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="85%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>

            <mask id="leftWingMask">
              <rect x="0" y="0" width="300" height="240" fill="url(#leftVerticalFade)" />
            </mask>
          </defs>

          {/* Masked group for Left Wing: guarantees perfect fade into dark background */}
          <g mask="url(#leftWingMask)">
            {/* Glow inside wing shape */}
            <path
              d="M 0,240 L 0,70 Q 0,40 30,40 L 180,40 L 300,120 L 300,240 Z"
              fill="url(#leftGlow)"
            />
            {/* Left Wing Border Path */}
            <path
              d="M 0,240 L 0,70 Q 0,40 30,40 L 180,40 L 300,120"
              stroke="url(#leftStrokeGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* CENTER HEADING OR BADGE */}
      <div className="relative z-10 text-center px-4 max-w-lg md:max-w-2xl mx-auto flex flex-col items-center justify-center h-full">
        {label ? (
          <div className="inline-flex items-center gap-2 bg-[#0D0F12] border border-white/10 px-4 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.9)] backdrop-blur-md hover:border-[#76FF39]/30 transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#76FF39] animate-pulse shadow-[0_0_8px_#76FF39]" />
            <span className="text-white font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
              {label}
            </span>
          </div>
        ) : title ? (
          <>
            <h2 className="font-monument text-xl sm:text-[28px] md:text-[38px] text-white tracking-[0.15em] uppercase leading-none drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[#00FF00]/70 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em] mt-3.5 opacity-80">
                {subtitle}
              </p>
            )}
          </>
        ) : null}
      </div>

      {/* RIGHT WING */}
      <div className="absolute right-0 top-0 h-full w-[28%] md:w-[25%] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 300 240"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft electric-green glow gradient inside the right wing */}
            <radialGradient
              id="rightGlow"
              cx="270"
              cy="40"
              r="220"
              fx="270"
              fy="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#00FF00" stopOpacity="0.38" />
              <stop offset="35%" stopColor="#76FF39" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#00FF00" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Stroke gradient that fades out along the diagonal */}
            <linearGradient
              id="rightStrokeGrad"
              x1="288"
              y1="40"
              x2="0"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.14)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.08)" />
              <stop offset="80%" stopColor="rgba(255, 255, 255, 0.02)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>

            {/* Premium vertical fade mask to completely eliminate any blocky or harsh cutoff edges */}
            <linearGradient
              id="rightVerticalFade"
              x1="0"
              y1="0"
              x2="0"
              y2="240"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="6%" stopColor="#000000" stopOpacity="0" />
              <stop offset="16%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="65%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="85%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>

            <mask id="rightWingMask">
              <rect x="0" y="0" width="300" height="240" fill="url(#rightVerticalFade)" />
            </mask>
          </defs>

          {/* Masked group for Right Wing: guarantees perfect fade into dark background */}
          <g mask="url(#rightWingMask)">
            {/* Glow inside wing shape */}
            <path
              d="M 300,240 L 300,70 Q 300,40 270,40 L 120,40 L 0,120 L 0,240 Z"
              fill="url(#rightGlow)"
            />
            {/* Right Wing Border Path */}
            <path
              d="M 300,240 L 300,70 Q 300,40 270,40 L 120,40 L 0,120"
              stroke="url(#rightStrokeGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
