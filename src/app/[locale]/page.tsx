'use client';

// import { Button } from "@/components/ui/button";
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axiosInstance';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { getMessages } from '@/lib/i18n';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const params = useParams();
  const locale = (params.locale as string) || 'ko';
  const t = getMessages(locale);
  const { data, isLoading, error } = useQuery<Todo[], Error>({
    queryKey: ['test'],
    queryFn: () =>
      axiosInstance
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <Button color='red'>{t.button}</Button>
      <div className='w-full max-w-md'>
        <h1 className='text-cool-gray-500 mb-4 text-center text-2xl font-semibold sm:text-left'>
          {t.todos}
        </h1>
        {isLoading && <p className='text-center'>{t.loading}</p>}
        {error && (
          <p className='text-center text-red-500'>{t.error}{error.message}</p>
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
