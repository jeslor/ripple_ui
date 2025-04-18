import { useEffect, useState } from "react";

import "./App.css";
import Ring from "./components/Ring";

const rings = [
  [
    { angle: 0, icon: "🔥" },
    { angle: 30, icon: "⚡" },
    { angle: 60, icon: "💧" },
  ],
  [],
  [
    { angle: 180, icon: "🧬" },
    { angle: 210, icon: "🎯" },
    { angle: 240, icon: "🚀" },
  ],
  [
    { angle: 270, icon: "🧠" },
    { angle: 300, icon: "🎮" },
    { angle: 330, icon: "🧰" },
  ],

  [],
  [
    { angle: 90, icon: "🌐" },
    { angle: 120, icon: "💊" },
    { angle: 150, icon: "📦" },
  ],
  [],
  [],
];

function App() {
  return (
    <main className="h-screen w-screen bg-black flex justify-center items-center">
      <div className="relative w-[600px] h-[600px] mx-auto my-20 flex items-center justify-center ">
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-gray-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center text-white">
          +
        </div>

        {rings.map((ring, i) => (
          <Ring key={i} ring={ring} i={i} />
        ))}
      </div>
    </main>
  );
}

export default App;

//  {
//    [
//      { angle: 0, icon: "🔥" },
//      { angle: 30, icon: "⚡" },
//      { angle: 60, icon: "💧" },
//      { angle: 90, icon: "🌐" },
//      { angle: 120, icon: "💊" },
//      { angle: 150, icon: "📦" },
//      { angle: 180, icon: "🧬" },
//      { angle: 210, icon: "🎯" },
//      { angle: 240, icon: "🚀" },
//      { angle: 270, icon: "🧠" },
//      { angle: 300, icon: "🎮" },
//      { angle: 330, icon: "🧰" },
//    ].map(({ angle, icon }, i) => {
//      const radius = (200 + i * 30) / 2;
//      const rad = (angle * Math.PI) / 180;
//      const x = Math.cos(rad) * radius;
//      const y = Math.sin(rad) * radius;

//      return (
//        <div
//          key={i}
//          className="absolute z-[10] w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center "
//          style={{
//            animation: `scale 1s linear infinite alternate`,
//            left: `calc(50% + ${x}px - 20px)`,
//            top: `calc(50% + ${y}px - 20px)`,
//          }}
//        >
//          {icon}
//        </div>
//      );
//    });
//  }
