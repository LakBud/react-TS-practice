// interface Todo = { key: Type, ... } → define object shape
// useState<Todo[]>([]) → typed array state
// setTodos(prev => [...prev, newTodo]) → TS ensures correct object type
// todos.map(todo => ...) → TS infers todo type from state

import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "Completed" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
