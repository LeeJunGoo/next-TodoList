import React, { useState } from 'react';
import { CheckCircleIcon, CircleIcon, TrashIcon } from 'lucide-react';
import { TodoItemProps } from '@/types/home';

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <li className="flex items-center content-center p-4 group">
      <button
        className="mr-3 text-gray-400 hover:text-blue-500 focus:-none"
        onClick={() => setIsClick((prvIsClick) => !prvIsClick)}
        aria-label={isClick ? '할 일에 대한 완료 버튼입니다.' : '할 일에 대한 미완료 버튼입니다.'}
      >
        {isClick ? <CheckCircleIcon className="h-5 w-5" /> : <CircleIcon className="h-5 w-5" />}
      </button>
      <span className={`flex-1 ${isClick ? 'line-through text-gray-400' : 'text-gray-700'}`}>장보기</span>

      <button
        className="text-gray-400 opacity-0 group-hover:opacity-100 focus:outline-hidden hover:text-red-500 active:text-red-700 "
        aria-label="삭제하기 버튼입니다."
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </li>
  );
};
export default TodoItem;
