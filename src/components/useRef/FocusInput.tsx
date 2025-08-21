// useRef<Type>(null) → typed ref to an element
// inputRef.current?.focus() → safely access element methods
// TS ensures ref matches correct HTML element type

import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input type="text" placeholder="Type Here" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
