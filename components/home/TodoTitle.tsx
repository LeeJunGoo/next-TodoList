import { Todo } from '@/types/home';
import { ListChecksIcon } from 'lucide-react';

const TodoTitle = ({ completedCount, todos }: { completedCount: number; todos: Todo[] }) => {
  return (
    <div className="bg-sky-500 px-6 py-4">
      <h1 className=" flex items-center gap-2 text-white">
        <ListChecksIcon className="h-6 w-6" />
        <span className="text-2xl font-bold ">할 일 목록</span>
      </h1>
      <p className="text-blue-100 mt-2">
        {completedCount}개 완료 / 총 {todos.length} 개
      </p>
    </div>
  );
};

export default TodoTitle;
