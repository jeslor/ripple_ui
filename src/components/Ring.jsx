import React from "react";

const Ring = ({ ring }) => {
  const ringIcon = ring.map(({ angle, icon }, i) => {
    const radius = (200 + i * 30) / 2;
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    return (
      <div
        key={i}
        className="absolute z-[10] w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center "
        style={{
          animation: `scale 1s linear infinite alternate`,
          left: `calc(50% + ${x}px - 20px)`,
          top: `calc(50% + ${y}px - 20px)`,
        }}
      >
        {icon}
      </div>
    );
  });

  return <div>Ring</div>;
};

export default Ring;
