type Props = {
  todos: string[];
  onClickDeleteTodo: (index: number) => void;
};

export const TodoList = (props: Props) => {
  const { todos, onClickDeleteTodo } = props;

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            {todo}
            <button onClick={() => onClickDeleteTodo(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
