// handleClick(e: MouseEvent<HTMLButtonElement>) → typed button event
// handleMouseEnter(e: MouseEvent<HTMLDivElement>) → typed div event
// e.currentTarget → correctly typed element
// TS ensures correct event type for each element

import { type MouseEvent } from "react";

const EventHandling = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", e.currentTarget);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered!", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling Example</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default EventHandling;
