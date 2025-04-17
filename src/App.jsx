import { useEffect, useState } from "react";

import "./App.css";

function App() {
  return (
    <main className="h-screen w-screen bg-slate-900 flex justify-center items-center">
      <div className="relative w-[600px] h-[600px] mx-auto my-20">
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-gray-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center text-white">
          +
        </div>

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute top-1/2 left-1/2 rounded-full border border-gray-700/40  `}
            style={{
              width: `${120 + i * 80}px`,
              height: `${120 + i * 80}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {[
          { angle: 0, icon: "🔥" },
          { angle: 30, icon: "⚡" },
          { angle: 60, icon: "💧" },
          { angle: 90, icon: "🌐" },
          { angle: 120, icon: "💊" },
          { angle: 150, icon: "📦" },
          { angle: 180, icon: "🧬" },
          { angle: 210, icon: "🎯" },
          { angle: 240, icon: "🚀" },
          { angle: 270, icon: "🧠" },
          { angle: 300, icon: "🎮" },
          { angle: 330, icon: "🧰" },
        ].map(({ angle, icon }, i) => {
          const radius = 240;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <div
              key={i}
              className="absolute w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
