import "./../stylesheets/main.css";
import { useEffect, useState } from "react";

function Main(props) {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todo") ?? []));
  }, localStorage.getItem("todo"));

  return (
    <div className="todo-frame">
      <h3>Todo</h3>
      {todo.map((item) => {
        return (
          <div>
            <h3>{item.title}</h3>
            <h5>{item.content}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
