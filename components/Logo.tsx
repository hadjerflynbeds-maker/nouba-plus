
import React from 'react';
import LogoSVG from './np.svg';

export const ProfileIcon: React.FC = () => {
  return (
    <img
      src={LogoSVG}
      alt="Profile Icon"
      className="h-5 w-5"
    />
  );
};
