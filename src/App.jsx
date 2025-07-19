import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Loader from './components/Loader/Loader.jsx'
import sensorData from './mock.js'
import './App.css'
import FuturisticCard from './components/FuturisticCard/FuturisticCard.jsx'
import CPUCard from './components/Cards/CPU/CPUCard.jsx'
import MinimalGPUCard from './components/Cards/GPU/GPUCard.jsx'
import {generateFluctuatedData} from "./lib.js"
import FanControlPanel from './components/Cards/FanControlPanel/FanControlPanel.jsx'
import ThunderButton from './components/ThunderButton.jsx'

function App() {

  //request full screen
  const requestFullScreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    }
  }

  const [data, setData] = useState(sensorData);
  const [launch, setLaunch] = useState(false);

  useEffect(()=>{
  const interval = setInterval(() => {
  const liveData = generateFluctuatedData(data);
  setData(liveData);
  // Update your components with liveData
}, 1000);

return () => {
  clearInterval(interval)
}
  },[data])

  return (
    <>
      <div className='w-screen bg-[url("bg.jpg")] bg-cover h-screen flex flex-col justify-center items-center'>


      <div className='relative'>
        <div onClick={() => setLaunch(!launch)} className={'z-100 absolute top-40 left-40  w-[80px] h-[80px] rounded-[40px] p-2 '+(launch ? " pulsating slight-small" : "")}>
          <ThunderButton />
        </div>

        <div className='absolute top-[-8vh] left-[10vw] w-48 h-48 rounded-[40px] p-2 flex justify-center items-center'>
          <img src={data.cpu.logo} className="w-full h-full" alt="CPU logo" />
        </div>

        <div onClick={() => requestFullScreen()} className='flex justify-center items-center pulsating'>
            {data ? <Loader  spin={launch} /> : <div>Loading...</div>}
        </div>
      </div>

      <div className='absolute right-5 top-5 flex flex-col gap-4 w-[35vw] h-[45vh]'>
       <CPUCard data={data ? data.cpu : {}} />
      </div>

      <div className='absolute left-5 top-5 flex flex-col gap-4 w-[35vw] h-[45vh]'>
       <MinimalGPUCard data={data ? data.gpu : {}} />
      </div>


       <div className='absolute p-0 right-40 bottom-5 flex flex-col gap-4 w-[30vw]'>
       <FanControlPanel fanData={data ? data.fans : {}} thunderMode={launch} />
      </div>
      </div>
    </>
  )
}

export default App
