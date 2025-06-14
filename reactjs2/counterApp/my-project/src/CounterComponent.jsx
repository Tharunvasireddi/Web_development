import React, { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  let increaseCount = () => setCount(count + 1);
  let decreaseCount = () => setCount(count - 1);
  let resetCount = () => setCount(0);
  return (
    <div className="bg-cyan-900 min-h-screen flex items-center justify-center">
     <div className="flex flex-col justify-between place-items-center bg-black rounded-lg">
     <h1 className=" text-white ">Count :{count}</h1>
      <div flex justify-center items-center>
        <button
          className="px-4 py-2 bg-green-500 text-center text-white m-2 rounded-lg"
          onClick={increaseCount}
        >
          increase
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-center text-white m-4 rounded-lg"
          onClick={decreaseCount}
        >
          decrease
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white text-center m-4 rounded-lg"
          onClick={resetCount}
        >
          reset
        </button>
      </div>
     </div>
    </div>
  );
};

export default CounterComponent;
