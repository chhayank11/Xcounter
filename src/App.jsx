import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};

export default App;
