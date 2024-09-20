import "./../stylesheets/main.css";
import { useEffect, useState } from "react";

function Main(props) {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const load_todo = () => {
      let data = localStorage.getItem("todo");
      if (data) {
        data = JSON.parse(data);
        data.sort((a, b) => {
          if (a.done === b.done) {
            return 0;
          }
          return a.done ? 1 : -1;
        });
        localStorage.setItem("todo", JSON.stringify(data));
        setTodo(data);
      } else {
        setTodo([]);
      }
    };
    load_todo();
  }, []);

  const done = (n) => {
    let data = localStorage.getItem("todo");
    if (data) {
      data = JSON.parse(data);
      data[n].done = true;
      localStorage.setItem("todo", JSON.stringify(data));
      setTodo(data);
    }
  };

  const modifyTodo = (n) => {};

  const deleteTodo = (n) => {
    if (confirm("Are you sure you want to delete this data?")) {
      let data = localStorage.getItem("todo");
      if (data) {
        data = JSON.parse(data);
        data = data.pop(n);
        alert(JSON.stringify(data));
      }
    }
  };

  return (
    <div className="todo-frame">
      <div>
        <h3>Todo</h3>
        <button onClick={props.toggleModal}>Add Todo</button>
        {todo.map((item, n) => {
          return (
            <div className={`${item.done ? "done" : ""}`}>
              <h3>{item.title}</h3>
              <h5>{item.content}</h5>
              <div>
                {item.done ? (
                  ""
                ) : (
                  <button
                    onClick={() => {
                      done(n);
                    }}
                  >
                    Mark as Done
                  </button>
                )}
                <button
                  onClick={() => {
                    modifyTodo(n);
                  }}
                >
                  Modify
                </button>
                <button
                  onClick={() => {
                    deleteTodo(n);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
