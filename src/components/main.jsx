import "./../stylesheets/main.css";
import { useEffect, useState } from "react";
import Field from "./field";

function Main(props) {
  const [todo, setTodo] = useState([]);
  useEffect(
    () => {
      const data = localStorage.getItem("todo");
      if (data) {
        setTodo(JSON.parse(data));
      } else {
        setTodo([]);
      }
    },
    localStorage.getItem("todo") ?? [],
  );
  const showField = () => {};
  return (
    <div className="todo-frame">
      <div>
        <h3>Todo</h3>
        <button onClick={showField}>Add Todo</button>
        {todo.map((item) => {
          return (
            <div>
              <h3>{item.title}</h3>
              <h5>{item.content}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
