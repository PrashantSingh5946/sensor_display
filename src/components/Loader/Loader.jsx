import React from 'react';
import './Loader.css'; // Assuming you have a CSS file for styling

const Loader = ({spin}) => {
  return (
    <div className={"loader slight-small flex justify-center content-center relative h-[400px] w-[400px]" + (spin ? " spin" : "")}>
      <div className="absolute w-[400px] h-[400px] flex justify-center items-center clipped-gradient">    
            <img className={'w-full h-full mb-[14px] small'} src="img/jarvis.svg" alt="Jarvis" />
      </div>

      <div className="absolute left-[100px] top-[100px] w-[200px] h-[200px] small flex justify-center items-center">
            <img className={(spin ? "spin-ulta " : "")} src="img/ring.svg" alt="Ring" />
      </div>

      <div className={"absolute left-[150px] top-[150px] w-[100px] h-[100px] flex justify-center items-center"}>
            <img src="img/load-dial.svg" alt="Load Dial" />
      </div>
         
    </div>
  );
};

export default Loader;

