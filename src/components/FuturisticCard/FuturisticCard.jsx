import React from "react";

const FuturisticCard = ({ title, value, unit, icon, trend }) => {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
      
      {/* Card container with clip-path */}
      <div className="relative bg-gray-900 bg-opacity-40 backdrop-blur-md rounded-lg p-4 border border-gray-700 overflow-hidden"
        style={{
          clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))"
        }}
      >
        {/* Inner glow border */}
        <div className="absolute inset-0 border border-cyan-400 border-opacity-30 rounded-lg pointer-events-none"
          style={{
            clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))"
          }}
        ></div>
        
        {/* Content */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{title}</p>
            <div className="flex items-end mt-1">
              <h3 className="text-2xl font-bold text-white">{value}</h3>
              {unit && <span className="text-gray-400 text-sm ml-1 mb-1">{unit}</span>}
            </div>
          </div>
          
          {icon && (
            <div className="p-2 rounded-md bg-cyan-500 bg-opacity-10">
              {React.cloneElement(icon, { className: "w-6 h-6 text-cyan-400" })}
            </div>
          )}
        </div>
        
        {/* Trend indicator */}
        {trend && (
          <div className={`mt-3 flex items-center text-xs font-medium ${trend.value > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend.value > 0 ? (
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
            {Math.abs(trend.value)}% {trend.label}
          </div>
        )}
        
        {/* Animated cyan border elements */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
      </div>
    </div>
  );
};

export default FuturisticCard;