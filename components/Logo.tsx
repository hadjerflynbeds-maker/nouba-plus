import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 240 50"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nouba Plus Logo"
    >
      <style>
        {`
          .logo-text {
            font-family: 'Poppins', sans-serif;
            font-size: 40px;
            font-weight: 700;
            dominant-baseline: central;
          }
        `}
      </style>
      <text x="120" y="25" className="logo-text" textAnchor="middle">
        <tspan fill="#1F2937">Nouba</tspan>
        <tspan fill="#F97316"> Plus</tspan>
      </text>
    </svg>
  );
};