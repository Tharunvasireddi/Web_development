import React from "react";
import { useTheme } from "./Context/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className=" h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold ">themeToggle</h1>
      <button className="bg-red-500 px-4 py-2 rounded-lg text-black dark:text-white " onClick={toggleTheme}>
        {theme === "dark"?"light":"dark"}
      </button>
    </div>
  );
};

export default App;
