import TodoList from '@/components/home/TodoList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 pt-8 ">
      <section className="max-w-[500px] mx-auto rounded-2xl shadow-md ">
        <TodoList />
      </section>
    </main>
  );
}
