import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#1a1a1a");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "red" }}>
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "blue" }}>
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "green" }}>
              Green
            </button>
            <button
              onClick={() => setColor("#1a1a1a")}
              className="outline-none px-4 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "#1a1a1a" }}>
              Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
