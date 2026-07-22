
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 900 300"
      className={className}
    >
      {/* Main Text */}
      <text x="450" y="110"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="110"
            fontWeight="700"
            fontStyle="italic"
            fill="currentColor">
        NEXTRISE
      </text>

      {/* Rounded Button */}
      <rect x="250" y="150"
            rx="35"
            ry="35"
            width="400"
            height="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"/>

      {/* WEB DESIGN text */}
      <text x="400" y="195"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="38"
            fontWeight="700"
            fontStyle="italic"
            fill="currentColor">
        WEB DESIGN
      </text>

      {/* Globe icon */}
      <circle cx="600" cy="185" r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"/>

      <line x1="580" y1="185" x2="620" y2="185"
            stroke="currentColor"
            strokeWidth="2"/>

      <line x1="600" y1="165" x2="600" y2="205"
            stroke="currentColor"
            strokeWidth="2"/>

      {/* Cursor */}
      <polygon points="620,200 650,215 635,220"
               fill="currentColor"/>
    </svg>
  );
};

export default Logo;
