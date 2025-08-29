import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold my-5">Current time</h1>
      <div className="border-2 text-2xl border-black w-60 font-bold rounded-2xl mx-auto p-4 bg-gray-800 text-red-400">
        <h2>{time.toLocaleTimeString()}</h2>
        <h2>{time.toDateString()}</h2>
      </div>
    </div>
  );
};

export default CurrentTime;
