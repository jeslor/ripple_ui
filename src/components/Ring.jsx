import React from "react";
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Ring = ({ ring, i }) => {
  const ringRadius = 200 + i * 80;
  const ringIcons = ring.map(({ angle, icon }, index) => {
    const radius = ringRadius / 2;
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    return (
      <div
        key={index}
        className={`absolute size-9 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-130 transition-all duration-300 ease-in-out`}
        style={{
          border: `2px solid ${getRandomColor()}`,
          animation: `scale 1s linear infinite alternate`,
          left: `calc(50% + ${x}px - 20px)`,
          top: `calc(50% + ${y}px - 20px)`,
        }}
      >
        {icon}
      </div>
    );
  });

  return (
    <div
      key={i}
      className={`absolute  rounded-full border-[1px]  transition-all duration-1000 ease-in-out`}
      style={{
        width: `${ringRadius}px`,
        height: `${ringRadius}px`,
        transition: `width 1.7s cubic-bezier(.33,.46,.83,.8)`,
        borderColor: `rgba(100, 100, 100, 0.${Math.abs(i + 1 - 9)})`,
        borderRadius: "50%",
        transformOrigin: "50% 50%",
        backgroundColor: `rgba(80, 80, 80, 0.${Math.abs(i + 1 - 8)})`,
        zIndex: `${Math.abs(i - 8)}`,
        animation: `scale 2.7s cubic-bezier(0.45, 0, 0, 1.8) infinite`,
        animationDelay: `${i * 0.05}s`,
      }}
    >
      {ringIcons}
    </div>
  );
};

export default Ring;
