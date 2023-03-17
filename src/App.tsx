import { useEffect, useState } from "react";

const Countdown = () => {
  const [time, setTime] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) setTime(300);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="relative">
        <div className="w-64 h-64 rounded-full border-4 border-gray-200 flex items-center justify-center">
          <div className="text-5xl font-bold text-gray-100">
            {`${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`}
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-full">
          <div className="h-full w-full rounded-full border-4 border-red-500 animate-pulse"></div>
          <div
            className="absolute top-0 right-0 h-full w-full rounded-full border-4 border-red-500 border-opacity-0 animate-pulse"
            style={{ animationDuration: `${time}s` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
