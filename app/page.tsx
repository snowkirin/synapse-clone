"use client";

// import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const { data, isLoading, error } = useQuery<Todo[], Error>({
    queryKey: ["test"],
    queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((res) => res.json()),
  });

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4 text-center sm:text-left">
            Todos
          </h1>
          {isLoading && <p className="text-center">Loading...</p>}
          {error && (
            <p className="text-center text-red-500">
              Error: {error.message}
            </p>
          )}
          {data && (
            <ul className="list-disc pl-5 space-y-2">
              {data.map((todo) => (
                <li
                  key={todo.id}
                  className={`${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.title}
                </li>
              ))}
            </ul>
          )}
        </div>
    </div>
  );
}
