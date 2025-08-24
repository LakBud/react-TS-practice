// useContext<MyContextType>() → access typed context
// const Component: FC = () => {...} → functional component
// Destructure context: { count, increment, decrement }
// TS ensures correct types from context

import { MyContext } from "./MyContext";
import { useContext, type FC } from "react";

const Counter: FC = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
