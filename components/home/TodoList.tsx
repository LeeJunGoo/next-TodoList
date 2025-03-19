'use client';
import { useState } from 'react';

import { CheckIcon, ListIcon, ListXIcon } from 'lucide-react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoTitle from './TodoTitle';
import type { FilterStatus, Todo } from '@/types/home';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: '장보기',
      completed: false,
    },
    {
      id: 2,
      text: '이메일 확인하기',
      completed: true,
    },
    {
      id: 3,
      text: '운동하기',
      completed: false,
    },
  ]);

  const [filter, setFilter] = useState<FilterStatus>('all');

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ]);
    }
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <TodoTitle completedCount={completedCount} todos={todos} />
      <TodoForm addTodo={addTodo} />
      <ul>
        <li>
          <ul className="flex border-y border-gray-300 ">
            <li
              className={`flex-1 py-2  ${
                filter === 'all' ? 'color text-blue-500 border-b-2 border-blue-500 ' : 'text-gray-500'
              }`}
            >
              <button aria-label="전체 리스트 보기" className="w-full cursor-pointer" onClick={() => setFilter('all')}>
                <ListIcon className="h-4 w-4 mr-1 inline " />
                <span className="text-sm font-medium">전체</span>
              </button>
            </li>
            <li
              className={`flex-1 py-2 ${
                filter === 'active' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
              }`}
            >
              <button
                aria-label="미완료 리스트 보기 "
                className="w-full cursor-pointer"
                onClick={() => setFilter('active')}
              >
                <ListXIcon className="h-4 w-4 mr-1 inline" />
                <span className="text-sm font-medium">미완료</span>
              </button>
            </li>
            <li
              className={`flex-1 py-2 ${
                filter === 'completed' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
              }`}
            >
              <button
                aria-label="완료 리스트 보기 "
                className="w-full cursor-pointer"
                onClick={() => setFilter('completed')}
              >
                <CheckIcon className="h-4 w-4 mr-1 inline" />
                <span className="text-sm font-medium">완료</span>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <ul className="divide-y divide-gray-200">
            {filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
              ))
            ) : (
              <li className="py-8 text-center text-gray-500">
                {filter === 'all'
                  ? '할 일이 없습니다. 새로운 할 일을 추가해보세요!'
                  : filter === 'active'
                  ? '미완료된 할 일이 없습니다.'
                  : '완료된 할 일이 없습니다.'}
              </li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default TodoList;
