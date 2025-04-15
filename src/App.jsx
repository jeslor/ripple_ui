import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen w-screen bg-slate-900">
      <h1 className="text-slate-300">Hello</h1>
      <div className="relative flex justify-center items-center ">
        <div className="bg-slate-700 absolute h-[20px] w-[20px]"></div>
        <div className="bg-slate-700 absolute h-[20px] w-[20px]"></div>
        <div className="bg-slate-700 absolute h-[20px] w-[20px]"></div>
        <div className="bg-slate-700 absolute h-[20px] w-[20px]"></div>
        <div className="bg-slate-700 absolute h-[20px] w-[20px]"></div>
        <div className="bg-slate-700 absolute h-[20px] w-[20px]"></div>
        <div className="bg-slate-700 absolute h-[20px] w-[20px]"></div>
        <div className="bg-slate-700 absolute h-[20px] w-[20px]"></div>
      </div>
    </main>
  );
}

export default App;
