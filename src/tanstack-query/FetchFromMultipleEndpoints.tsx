import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const fetchTodos = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
  return res.data;
};

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
  return res.data;
};

const FetchFromMultipleEndpoints = () => {
  const [currentTodoId, setCurrentTodoId] = useState(1);
  const [currentPostId, setCurrentPostId] = useState(1);

  const handleNextTodoClick = () => {
    setCurrentTodoId((prevId) => Math.min(prevId + 1, todosData.length));
  };

  const handleNextPostClick = () => {
    setCurrentPostId((prevId) => Math.min(prevId + 1, todosData.length));
  };

  const results = useQueries({
    queries: [
      { queryKey: ["todos"], queryFn: fetchTodos },
      { queryKey: ["posts"], queryFn: fetchPosts },
    ],
  });

  const [todosQuery, postsQuery] = results;

  if (todosQuery.isLoading || postsQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (todosQuery.error || postsQuery.error) {
    return <p>An error occured: {todosQuery.error?.message || postsQuery.error?.message}</p>;
  }

  const todosData = todosQuery.data;
  const postsData = postsQuery.data;

  return (
    <div>
      <div>
        <h1>Todos</h1>
        <pre>
          {JSON.stringify(
            todosData.find((todo: any) => todo.id === currentTodoId),
            null,
            2
          )}
        </pre>

        <button className="bg-black text-white" onClick={handleNextTodoClick}>
          Next Todo
        </button>
      </div>

      <div>
        <h1>posts</h1>
        <pre>
          {JSON.stringify(
            postsData.find((post: any) => post.id === currentPostId),
            null,
            2
          )}
        </pre>

        <button className="bg-black text-white" onClick={handleNextPostClick}>
          Next Post
        </button>
      </div>
    </div>
  );
};

export default FetchFromMultipleEndpoints;
