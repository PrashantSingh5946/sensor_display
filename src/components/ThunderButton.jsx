import React, { useState } from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';

const ThunderButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`
        relative w-16 h-16 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isActive ? 
          'bg-none shadow-lg shadow-cyan-500/50 ring-2 ring-cyan-300' : 
          'bg-gray-800 border border-gray-600'}
        focus:outline-none focus:ring-2 focus:ring-cyan-400
      `}
    >
      {/* Pulsating glow effect (only when active) */}
      {isActive && (
        <span className="absolute inset-0 rounded-full bg-purple-400 opacity-0 animate-ping"></span>
      )}
      
      {/* Thunder/lightning icon */}
      <BoltIcon className={`
        w-8 h-8 transition-all duration-200
        ${isActive ? 'text-white scale-110' : 'text-blue-600/100'}
      `} />
      
      {/* Subtle inner glow (always present but more visible when active) */}
      <div className={`
        absolute inset-0 rounded-full opacity-10
        ${isActive ? 'bg-white' : 'bg-cyan-400'}
      `}></div>
    </button>
  );
};

export default ThunderButton;