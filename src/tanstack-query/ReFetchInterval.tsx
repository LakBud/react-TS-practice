import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const fetchTodo = async (id: number) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.data;
};

const ReFetchInterval = () => {
  const [currentId, setCurrentId] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["todo", currentId],
    queryFn: () => fetchTodo(currentId),
    refetchInterval: 5000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>An error occured: {error.message}</p>;

  return (
    <div>
      <h1>Todo</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1))}>Next Todo</button>
    </div>
  );
};

export default ReFetchInterval;
