// useState<Type>(initial) → typed state
// count → typed value, setCount → typed setter
// TS ensures only correct type can be set

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
