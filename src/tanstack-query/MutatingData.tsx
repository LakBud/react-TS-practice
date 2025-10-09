import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

const postTodo = async (newTodo: Todo) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos/",
    newTodo,

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};

const MutatingData = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const { mutate, error, status } = useMutation<Todo, Error, Todo>({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "") return;

    // * Mutate our data -> send data
    mutate({ title, completed: false });
    setTitle("");
  };

  return (
    <div>
      <h1>Create new todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          className="border"
        />
        <button type="submit" className="bg-black text-white">
          {status === "pending" ? "adding..." : "Add Todo"}
        </button>

        {error && <h1>An error occured: {error.message}</h1>}
        {status === "success" && <h1>Todo added Successfully</h1>}
      </form>
    </div>
  );
};

export default MutatingData;
