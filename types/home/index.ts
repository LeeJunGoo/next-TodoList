export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type FilterStatus = 'all' | 'active' | 'completed';

export type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};
