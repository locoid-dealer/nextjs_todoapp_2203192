import type { NextPage } from "next";
import { useState } from "react";
import { ChangeEvent } from "react";
import TodoList from "../components/TodoList";

const Home: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onClickAddTodo = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
  };

  const onClickDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <h1>Todoを追加しよう</h1>
        <input type="text" value={text} onChange={onChangeText} />
        <button onClick={onClickAddTodo}>追加</button>
      </div>
      <div>
        <h1>Todoを確認しよう</h1>
        <TodoList todos={todos} onClickDeleteTodo={onClickDeleteTodo} />
      </div>
    </>
  );
};

export default Home;
