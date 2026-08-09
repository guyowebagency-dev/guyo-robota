import React, { useId } from 'react';

interface WorthItTransitionProps {
  title?: string;
  subtitle?: string;
}

export const WorthItTransition: React.FC<WorthItTransitionProps> = ({
  title = "Is It Worth It?",
  subtitle = "Objection Crusher"
}) => {
  const baseId = useId().replace(/:/g, '');
  const leftGlowId = `${baseId}-leftGlow`;
  const leftStrokeGradId = `${baseId}-leftStrokeGrad`;
  const leftVerticalFadeId = `${baseId}-leftVerticalFade`;
  const leftWingMaskId = `${baseId}-leftWingMask`;

  const rightGlowId = `${baseId}-rightGlow`;
  const rightStrokeGradId = `${baseId}-rightStrokeGrad`;
  const rightVerticalFadeId = `${baseId}-rightVerticalFade`;
  const rightWingMaskId = `${baseId}-rightWingMask`;

  return (
    <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] bg-transparent overflow-hidden select-none flex items-center justify-between">
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
              id={leftGlowId}
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
              id={leftStrokeGradId}
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

            {/* Premium vertical fade mask so wing border and panel flow seamlessly into the section below */}
            <linearGradient
              id={leftVerticalFadeId}
              x1="0"
              y1="0"
              x2="0"
              y2="240"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="10%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            <mask id={leftWingMaskId}>
              <rect x="0" y="0" width="300" height="240" fill={`url(#${leftVerticalFadeId})`} />
            </mask>
          </defs>

          {/* Masked group for Left Wing: guarantees perfect fade into dark background */}
          <g mask={`url(#${leftWingMaskId})`}>
            {/* Glow inside wing shape */}
            <path
              d="M 0,240 L 0,70 Q 0,40 30,40 L 180,40 L 300,120 L 300,240 Z"
              fill={`url(#${leftGlowId})`}
            />
            {/* Left Wing Border Path */}
            <path
              d="M 0,240 L 0,70 Q 0,40 30,40 L 180,40 L 300,120"
              stroke={`url(#${leftStrokeGradId})`}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* CENTER HEADING */}
      <div className="relative z-10 text-center px-4 max-w-lg md:max-w-2xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="font-monument text-xl sm:text-[28px] md:text-[38px] text-white tracking-[0.15em] uppercase leading-none drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
          {title}
        </h2>
        {/* Subtle decorative subtitle line underneath the heading */}
        {subtitle && (
          <p className="text-[#00FF00]/70 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em] mt-3.5 opacity-80">
            {subtitle}
          </p>
        )}
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
              id={rightGlowId}
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
              id={rightStrokeGradId}
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

            {/* Premium vertical fade mask so wing border and panel flow seamlessly into the section below */}
            <linearGradient
              id={rightVerticalFadeId}
              x1="0"
              y1="0"
              x2="0"
              y2="240"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="10%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            <mask id={rightWingMaskId}>
              <rect x="0" y="0" width="300" height="240" fill={`url(#${rightVerticalFadeId})`} />
            </mask>
          </defs>

          {/* Masked group for Right Wing: guarantees perfect fade into dark background */}
          <g mask={`url(#${rightWingMaskId})`}>
            {/* Glow inside wing shape */}
            <path
              d="M 300,240 L 300,70 Q 300,40 270,40 L 120,40 L 0,120 L 0,240 Z"
              fill={`url(#${rightGlowId})`}
            />
            {/* Right Wing Border Path */}
            <path
              d="M 300,240 L 300,70 Q 300,40 270,40 L 120,40 L 0,120"
              stroke={`url(#${rightStrokeGradId})`}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
