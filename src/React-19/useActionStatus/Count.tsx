// This React 19 component uses `useActionState` to manage state with a form action.
// `increment` is an async function that receives the previous state and the form data;
// it logs the value of the "name" input and returns the new state (previousState + 1).
// `useActionState` returns the current state and a form action function (`formAction`)
// that you can attach to a button. Clicking the button increments the state and can
// access form values without manually handling onSubmit or useState.

import { useActionState } from "react";

async function increment(previousState, formData) {
  console.log(formData.get("name"));
  return previousState + 1;
}

const Count = () => {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form>
      <h1 className="text-3xl">{state}</h1>
      <button className="bg-teal-300 p-2" formAction={formAction}>
        Increment
      </button>

      <br />

      <input type="text" placeholder="Enter your Name" className="border-2" name="name" />
    </form>
  );
};

export default Count;
