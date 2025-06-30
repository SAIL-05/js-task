import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const change = () => {
    setCount(count + 1);
  };

  const finalCount = () => {
    setCount(count * 2);
  };

  return (
    <>
      <h1>This is a counter</h1>
      <p>counter: {count}</p>
      <button onClick={change}>click</button>
      <button onClick={finalCount}>final</button>
    </>
  );
};

export default App;
