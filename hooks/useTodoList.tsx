import { useState } from "react";

export const useTodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (text: string) => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return { todos, addTodo, deleteTodo };
};

export default useTodoList;
