import React from "react";

const MinimalCPUCard = ({ data }) => {
  return (
    <div className="relative group w-full">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-cyan-500/10 rounded-lg blur opacity-45 group-hover:opacity-100 transition duration-200"></div>
      
      {/* Card container with clip-path */}
      <div className="relative bg-none backdrop-blur-md rounded-lg p-5 border border-gray-700 overflow-hidden h-full"
        style={{
          clipPath: "polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))"
        }}
      >
        {/* Inner glow border */}
        <div className="absolute inset-0 border border-cyan-400/50 border-opacity-10 rounded-lg pointer-events-none"
          style={{
            clipPath: "polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))"
          }}
        ></div>
        
        {/* Content */}
        <div className="flex flex-col h-full">
          {/* Header with title and logo */}
          <div className="flex justify-end items-center">
            <h3 className="text-4xl font-bold text-white">{data.title}</h3>
          </div>
          
          {/* Main metrics - floating values */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            {/* Usage */}
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{data.usage} <span className="text-lg align-bottom">%</span></div>

            </div>
            
            {/* Temperature */}
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{data.temperature.split(' ')[0]} <span className="text-sm align-top">°C</span></div>
            </div>
            
            {/* Clock Speed */}
            <div className="text-center">
              <p className="text-3xl font-bold text-white">{(data.clockSpeed/1000).toFixed(1)} <span className="text-sm align-baseline">GHz</span></p>

            </div>
          </div>
        
        </div>
        
        {/* Animated cyan border elements */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
      </div>
    </div>
  );
};

export default MinimalCPUCard;