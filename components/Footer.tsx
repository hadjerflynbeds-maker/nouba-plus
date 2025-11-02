import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center p-4 mt-auto">
      <p className="text-white text-sm opacity-70">
        &copy; {currentYear} Nouba Plus. All rights reserved.
      </p>
    </footer>
  );
};