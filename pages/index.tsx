import type { NextPage } from "next";
import { useState } from "react";
import { ChangeEvent } from "react";

const Home: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onClickTodos = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <h1>Todoを追加しよう</h1>
        <input
          type="text"
          value={text}
          onChange={(event) => onChangeText(event)}
        />
        <button onClick={() => onClickTodos()}>追加</button>
      </div>
      <div>
        <h1>Todoを確認しよう</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
