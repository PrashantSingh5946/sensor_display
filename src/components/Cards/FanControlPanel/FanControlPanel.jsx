import React, {useState, useEffect} from "react";

const FanControl = ({ label, rpm, onAdjust, className }) => {
  return (
    <div className={`relative group flex flex-col items-center slight-small ${className}`}>
      {/* Glow effect */}
      <div className=" slight-small absolute -inset-0.5 bg-cyan-500/20 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
      
      {/* Circular control */}
      <div className="relative w-24 h-24 bg-gray-900/40 backdrop-blur-md rounded-full border-2 border-cyan-400/70 flex items-center justify-center" style={{
        transform: "rotate"
      }}>
        {/* RPM value */}
        <div className="text-center mt-4">
          <div className="text-2xl font-bold text-white align-center">{rpm}</div>
          <div className="text-xs text-cyan-400 mt-0">RPM</div>
        </div>
        
        {/* Control ring */}
        <div className="control absolute inset-0 rounded-full border-4 border-transparent pointer-events-none flex items-center justify-center">
        
          <FanWithRPM rpm={rpm} />
        </div>
      </div>
      
      {/* Label */}
      <div className="mt-3 text-sm font-medium text-cyan-300 uppercase tracking-wider">
        {label}
      </div>
      

    </div>
  );
};

const FanControlPanel = ({fanData, thunderMode}) => {
 

  const handleAdjust = (fan, amount) => {
    setFanSpeeds(prev => ({
      ...prev,
      [fan]: Math.max(0, Math.min(3000, prev[fan] + amount))
    }));
  };

  return (
    <div className="fixed bottom-1 left-0 right-0 flex justify-center">
      <div className="flex gap-4 p-0 rounded-2xl shadow-xl">
        <FanControl 
          label="CPU" 
          rpm={fanData.cpu} 
          onAdjust={(amt) => handleAdjust('cpu', amt)} 
          className={thunderMode ? 'pulsating' : ''}
        />
        <FanControl 
          label="GPU" 
          rpm={fanData.gpu} 
          onAdjust={(amt) => handleAdjust('gpu', amt)} 
          className={thunderMode ? 'pulsating' : ''} 
        />
        <FanControl 
          label="Case" 
          rpm={fanData.case} 
          className={thunderMode ? 'pulsating' : ''}
          onAdjust={(amt) => handleAdjust('case', amt)} 
        />
       
      </div>
    </div>
  );
};


const FanWithRPM = ({ rpm }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Calculate rotation speed (degrees per millisecond)
    const degreesPerMillisecond = (rpm * 360) / (60 * 1000);
    let lastTime = performance.now();
    let animationId;

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      setRotation(prevRotation => (prevRotation + degreesPerMillisecond * deltaTime) % 360);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [rpm]);

  return (
    <div className="fan-container" style={{transform:'scale(1.4)'}}>
      <div 
        className="fan-blades"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.05s linear',
          width: '100px',
          height: '100px',
          position: 'relative',
          borderRadius: '50%',
          backgroundImage: 'url("/minutes.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
        }}
      >
       
      </div>
    </div>
  );
};
export default FanControlPanel;