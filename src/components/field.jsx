import Input from "./../widgets/input";
import "./../stylesheets/field.css";
import { useEffect, useState } from "react";

function Field(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(0);

  useEffect(() => {
    if (props.modifyVal) {
      const e = props.modifyVal.data;
      setTitle(e.title);
      setContent(e.content);
      setDate(e.time);
    }
  }, [props.modifyVal]);

  const addToDo = (e) => {
    let msg = [];
    const time = new Date(date);
    if (title.length < 4) {
      msg.push("title must be contain atleast 4 characters");
    }
    if (content.length < 10) {
      msg.push("content must be contain atleast 10 characters");
    }
    if (time.getTime() <= 10) {
      msg.push("time and date are invalid");
    }
    if (msg.length > 0) {
      alert(`The ${msg.join(" and ")}.`);
      e.preventDefault();
      return;
    }

    let local = JSON.parse(localStorage.getItem("todo") ?? "[]");
    if (!local) {
      local = [];
    }
    if (props.modifyVal.id <= -1) {
      local.push({
        title: title,
        content: content,
        time: time.getTime(),
        done: false,
      });
    } else {
      local[props.modifyVal.id] = {
        title: title,
        content: content,
        done: props.modifyVal.data.done,
      };
    }
    localStorage.setItem("todo", JSON.stringify(local));
    props.onHide();
    e.preventDefault();
  };

  return (
    <div className={`float ${props.className} ${props.isShow ? "show" : ""}`}>
      <span onClick={props.onHide} className="close">
        X
      </span>
      <form onSubmit={addToDo}>
        <h1>Todo Form</h1>
        <Input
          placeholder="Title"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <Input
          placeholder="Content"
          id="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        />
        <Input
          placeholder="Time and Date"
          id="time_date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
          type="datetime-local"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default Field;
