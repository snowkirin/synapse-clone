'use client';

// import { Button } from "@/components/ui/button";
import { useQuery } from '@tanstack/react-query';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const { data, isLoading, error } = useQuery<Todo[], Error>({
    queryKey: ['test'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then((res) =>
        res.json(),
      ),
  });

  return (
    <div className='flex min-h-screen flex-col items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <div className='w-full max-w-md'>
        <h1 className='mb-4 text-center text-2xl font-semibold sm:text-left'>
          Todos
        </h1>
        {isLoading && <p className='text-center'>Loading...</p>}
        {error && (
          <p className='text-center text-red-500'>Error: {error.message}</p>
        )}
        {data && (
          <ul className='list-disc space-y-2 pl-5'>
            {data.map((todo) => (
              <li
                key={todo.id}
                className={`${
                  todo.completed ? 'text-gray-500 line-through' : ''
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
