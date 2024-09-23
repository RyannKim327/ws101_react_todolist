import "./../stylesheets/main.css";
import { useEffect, useState } from "react";

function Main(props) {
  const [todo, setTodo] = useState([]);
  const [sure, setSure] = useState(-1);

  useEffect(() => {
    const load_todo = () => {
      let data = localStorage.getItem("todo");
      if (data) {
        data = JSON.parse(data);
        data.sort((a, b) => {
          if (a.done === b.done) {
            return 0;
          }
          // TODO: To sort by done
          if (a.done === b.done) {
            return a.time - b.time;
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
  }, [localStorage.getItem("todo")]);

  const done = (n) => {
    let data = localStorage.getItem("todo");
    if (data) {
      data = JSON.parse(data);
      data[n].done = true;
      localStorage.setItem("todo", JSON.stringify(data));
      setTodo(data);
    }
    return;
  };

  const modifyTodo = (n) => {
    let data = localStorage.getItem("todo");
    if (data) {
      props.triggerValue(JSON.parse(data)[n], n);
    }
    return;
  };

  const deleteTodo = (n) => {
    if (sure === n) {
      let data = localStorage.getItem("todo");
      if (data) {
        data = JSON.parse(data);
        data = data.splice(n + 1, 1);
      }
      localStorage.setItem("todo", JSON.stringify(data));
    }

    setSure(n);
    return;
  };

  return (
    <div className="todo-frame">
      <div>
        <h3>Todo</h3>
        <button onClick={props.toggleModal}>Add Todo</button>
        {todo.map((item, n) => {
          const _t = new Date(item.time);
          const format = `${_t.getMonth()}-${_t.getDate()}-${_t.getFullYear()} ${_t.getHours()}:${_t.getMinutes()}`;
          return (
            <div className={`${item.done ? "done" : ""}`}>
              <h3>{item.title}</h3>
              <h5>{item.content}</h5>
              <h5>{format}</h5>
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
                  {sure === n ? "Are you sure?" : "Delete"}
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
