import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const fetchTodos = async (page = 1, limit = 10) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
  return res.data;
};

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos", currentPage, pageSize],
    queryFn: () => fetchTodos(currentPage, pageSize),
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h1>Todos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <nav className="text-center p-5 text-white gap-10">
        <button className="bg-black p-4" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="bg-black p-4" onClick={handleNextPage}>
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
