
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`inline-block ${className}`}>
      <svg viewBox="0 0 160 100" className="w-full h-full">
        <defs>
          <style>
            {`.nouba-text { font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 28px; fill: #1e3a8a; }`}
          </style>
        </defs>
        
        {/* Orange Logo Shape */}
        <g fill="#F97316">
          {/* Outer Arch */}
          <path d="M40,70 V30 C40,10 120,10 120,30 V70 H100 V35 C100,25 60,25 60,35 V70 H40 Z" />
          {/* Inner Arch */}
          <path d="M70,60 V40 C70,35 90,35 90,40 V60 H70 Z" />
        </g>
        
        {/* Text */}
        <text x="50%" y="95" textAnchor="middle" className="nouba-text">
          NOUBA PLUS
        </text>
      </svg>
    </div>
  );
};
