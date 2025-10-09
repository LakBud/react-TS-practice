import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
};

const WithTanstackQuery = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ["todo"], queryFn: fetchData });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>An error occured: {error.message}</p>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default WithTanstackQuery;
