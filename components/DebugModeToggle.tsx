import React from 'react';

interface DebugModeToggleProps {
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DebugModeToggle: React.FC<DebugModeToggleProps> = ({ isChecked, onChange }) => (
  <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 mt-4 text-white border border-gray-700">
    <div className="flex items-center justify-between">
      <div className="pr-4">
        <h4 className="font-bold">Developer Debug Mode</h4>
        <p className="text-xs opacity-80 mt-1">
          If submissions aren't appearing in your sheet, enable this. It will open the pre-filled Google Form in a new tab to help you verify your configuration in `constants.ts`.
        </p>
      </div>
      <label htmlFor="debug-toggle" className="flex items-center cursor-pointer flex-shrink-0">
        <div className="relative">
          <input type="checkbox" id="debug-toggle" className="sr-only" checked={isChecked} onChange={onChange} />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${isChecked ? 'transform translate-x-full bg-orange-500' : ''}`}></div>
        </div>
      </label>
    </div>
  </div>
);
