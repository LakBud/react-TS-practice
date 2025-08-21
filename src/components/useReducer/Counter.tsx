// useReducer<ReducerType>(reducer, initialState) → typed state & dispatch
// state.count → typed state property
// dispatch({ type: "Action" }) → TS checks action type if typed
// TS ensures reducer and state match correct shapes

import { useReducer } from "react";
import counterReducer from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};

export default Counter;
