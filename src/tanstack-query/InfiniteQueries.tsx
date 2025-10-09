import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Fetch function
const fetchTodos = async ({ pageParam = 1 }: { pageParam?: number }) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=10`);
  return res.data as Todo[];
};

const InfiniteQueries = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    getNextPageParam: (lastPage, allPages) => (lastPage.length === 10 ? allPages.length + 1 : undefined),
    initialPageParam: 1,
  });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: null, rootMargin: "100px", threshold: 1.0 }
    );

    const ref = loadMoreRef.current;
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {/* Use optional chaining: data?.pages */}
        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex}>
            {page.map((todo: Todo) => (
              <p key={todo.id}>
                {todo.id}. {todo.title}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div ref={loadMoreRef} style={{ height: "50px" }}>
        {isFetchingNextPage && <div>Loading more...</div>}
        {!hasNextPage && <div>No more todos</div>}
      </div>
    </div>
  );
};

export default InfiniteQueries;
