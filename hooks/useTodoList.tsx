import { useState } from "react";
import { ChangeEvent } from "react";

export const useTodoList = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addTodo = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return { text, todos, onChangeText, addTodo, deleteTodo };
};

export default useTodoList;
