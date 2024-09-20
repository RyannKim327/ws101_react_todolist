import "./../stylesheets/main.css";
import { useEffect, useState } from "react";

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

  return (
    <div className="todo-frame">
      <div>
        <h3>Todo</h3>
        <button onClick={props.toggleModal}>Add Todo</button>
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
