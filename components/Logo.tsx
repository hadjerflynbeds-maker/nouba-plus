
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`inline-block ${className}`}>
      <svg viewBox="0 0 160 100" className="w-full h-full" src="C:\Users\HTL-ADM\Downloads\nouba-plus-lead-capture\components\NOUBA_PLUS_LOGO.svg"/>
        
    
    </div>
  );
};
