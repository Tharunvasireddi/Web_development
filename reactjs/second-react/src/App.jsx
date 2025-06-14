import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Navbar} from "./components/Navbar";
import Name from "./components/Name";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-800">
        <h1 className="text-white">tharun</h1>
        <Navbar />
        <Name/>
      </div>
    </>
  );
}

export default App;
