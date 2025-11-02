
import React from 'react';

export const SpinnerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`animate-spin ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v3m0 12v3m9-9h-3m-12 0H3m16.657-6.657l-2.122 2.122m-11.314 7.072l-2.122 2.122M6.343 6.343l2.122 2.122m11.314 7.072l2.122 2.122"
    />
  </svg>
);
