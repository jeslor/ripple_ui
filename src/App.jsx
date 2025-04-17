import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const scaleAnimation = `
    @keyframes scale {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  `;
  return (
    <main className="h-screen w-screen bg-slate-900 flex justify-center items-center">
      <div className="relative w-[600px] h-[600px] mx-auto my-20 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-gray-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center text-white">
          +
        </div>

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute  rounded-full border border-gray-700/40  `}
            style={{
              width: `${120 + i * 80}px`,
              height: `${120 + i * 80}px`,
              // transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              transformOrigin: "50% 50%",
              animation: `scale ${i + 1 * 2}s linear infinite alternate`,
              animationDelay: `${i + 2}s`,
              // boxShadow: `0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 6px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 0 10px rgba(255, 255, 255, 0.1)`,
              background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0.1) 80%, rgba(255, 255, 255, 0.1) 100%)`,
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
              className="absolute w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center "
              style={{
                animation: `scale 1s linear infinite alternate`,
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
