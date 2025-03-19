import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
type TodoFormProps = {
  addTodo: (text: string) => void;
};
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-[440px] h-[50px] mx-auto m-5 ">
      <fieldset className="flex w-full h-full ">
        <legend className="sr-only">투두리스트 항목 추가</legend>
        <label htmlFor="content" className="sr-only">
          할 일을 입력해주세요
        </label>
        <input
          id="content"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="새로운 할 일을 입력하세요"
          className="flex-1 pl-4 border border-gray-300 rounded-l-[7px] text-black focus:border-0 outline-hidden focus:ring-1 focus: ring-sky-500"
        />
        <button
          type="submit"
          aria-label="항목 추가 버튼"
          className="w-[50px] bg-sky-500 text-white  rounded-r-[7px] hover:bg-amber-600 cursor-pointer active:bg-amber-400"
        >
          <PlusIcon className="mx-auto" />
        </button>
      </fieldset>
    </form>
  );
};
export default TodoForm;
