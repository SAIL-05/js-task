import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [sqrtResult, setSqrtResult] = useState(false);

  const add = () => {
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setCount((prev) => prev - 1);
  };
  const sqrt = () => {
    setSqrtResult(count >= 0 ? Math.sqrt(count) : false);
  };
  const clear = () => {
    setCount(0);
    setSqrtResult(false);
  };

  return (
    <main className="flex flex-col items-center  bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">This is a counter</h1>
      <p className="text-lg mb-2">counter: {count}</p>
      {sqrtResult !== false && (
        <p className="text-lg mb-4">Square Root: {sqrtResult}</p>
      )}
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 "
          onClick={add}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 "
          onClick={minus}
        >
          −
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 "
          onClick={sqrt}
        >
          Sqrt
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 "
          onClick={clear}
        >
          Clear
        </button>
      </div>
    </main>
  );
};

export default App;
