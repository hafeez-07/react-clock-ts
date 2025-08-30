import { useState, useRef } from "react";
import "../index.css";
const StopWatch = () => {
  const intervalRef = useRef<number | undefined>(undefined); //hold interval ID , does not cause re-render
  const [seconds, setSeconds] = useState(0);
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  const second = seconds % 60;

  const startHandler = () => {
    if (intervalRef.current)
      return; /*if interval is already running and user clicks
																					start/resume again , dont add interval , instead
																					return nothing	*/
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const pauseHandler = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;
  };

  const resetHandler = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = undefined;
    setSeconds(0);
  };

  const format = (num: number) => String(num).padStart(2, "0"); //funct to return hr:min:sec
  //   in 00:00:00 format
  return (
    <div>
      <h1 className=" text-2xl sm:text-5xl font-bold my-4"> Stop Watch </h1>
      <h2
        className="bg-slate-900 rounded-2xl shadow-2xl shadow-inner text-2xl 
      sm:text-4xl text-[#39FF14] font-bold border-2  h-15 sm:h-20 w-60 sm:w-100
       mx-auto my-5 p-4 border-black  "
      >
        {format(hour)} <span className="custom-text">hr</span> :{" "}
        {format(minute)} <span className="custom-text">min</span> :
        {format(second)} <span className="custom-text">sec</span>
      </h2>
      <div className="flex justify-center gap-4">
        <button
          className="bg-green-500 text-white rounded-2xl p-2 h-9 hover:bg-green-500/60"
          onClick={startHandler}
        >
          Start/resume
        </button>
        <button
          className="bg-orange-400 p-2 text-white rounded-2xl h-9 hover:bg-orange-400/60"
          onClick={pauseHandler}
        >
          Pause
        </button>
        <button
          className="bg-red-500 text-white h-9 p-2 rounded-2xl hover:bg-red-500/60"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
