import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
};

const StaleTime = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
    staleTime: 5000,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>An Error Occured: {error.message}</h1>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default StaleTime;
