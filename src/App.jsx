import { useEffect, useState } from "react";

import "./App.css";

const circles = Array.from({ length: 8 });

function App() {
  const [count, setCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  console.log(circles);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-screen w-screen bg-slate-900 flex justify-center items-center">
      <div className="relative flex justify-center items-center ">
        {isReady &&
          circles.map((_, index) => (
            <div
              style={{ width: `${(index + 1) * 100}px`, height: "100px" }}
              key={index}
              className={` rounded-full bg-slate-200 absolute transition-all duration-1000 ease-in-out ${
                count === index ? "scale-100" : "scale-0"
              }`}
            ></div>
          ))}
      </div>
    </main>
  );
}

export default App;
