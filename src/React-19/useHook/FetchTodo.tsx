// This React component uses the new React 19 `use()` hook to handle an async
// fetch directly in a component. `fetchData()` retrieves a todo from an API,
// and `use(fetchData())` suspends rendering until the promise resolves,
// then provides the resolved data (`data.title`) to render.

import { use } from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

const FetchTodo = () => {
  const data = use(fetchData());

  return (
    <div>
      <p>{data.title}</p>
    </div>
  );
};

export default FetchTodo;
