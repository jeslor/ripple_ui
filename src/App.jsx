import { useEffect, useState } from "react";

import "./App.css";

function App() {
  return (
    <main className="h-screen w-screen bg-slate-900 flex justify-center items-center">
      <div className="relative flex justify-center items-center ">
        <div className="w-[100px] h-[100px] bg-purple-100 rounded-full"></div>
        <div className="w-[200px] h-[200px] bg-purple-200 rounded-full"></div>
        <div className="w-[300px] h-[300px] bg-purple-300 rounded-full"></div>
        <div className="w-[400px] h-[400px] bg-purple-400 rounded-full"></div>
        <div className="w-[500px] h-[500px] bg-purple-500 rounded-full"></div>
      </div>
    </main>
  );
}

export default App;
