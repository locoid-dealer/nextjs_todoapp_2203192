import type { NextPage } from "next";
import TodoList from "../components/TodoList";
import useTodoList from "../hooks/useTodoList"

const Home: NextPage = () => {
  const {text, todos, onChangeText, addTodo, deleteTodo} = useTodoList()

  const onClickAddTodo = () => {
    addTodo()
  };

  const onClickDeleteTodo = (index: number) => {
    deleteTodo(index)
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
