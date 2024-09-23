import Input from "./../widgets/input";
import "./../stylesheets/field.css";
import { useEffect, useState } from "react";

function Field(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tempTitle, setTempTitle] = useState("");
  const [tempContent, setTempContent] = useState("");

  useEffect(() => {
    if (props.modifyVal) {
      const e = props.modifyVal.data;
      setTitle(e.title);
      setContent(e.content);
      setTempTitle(e.title);
      setTempContent(e.content);
    }
  }, [props.modifyVal]);

  const addToDo = (e) => {
    let msg = [];
    if (title.length < 4) {
      msg.push("title must be contain atleast 4 characters");
    }
    if (content.length < 10) {
      msg.push("content must be contain atleast 10 characters");
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
            setTempTitle(e.target.value);
            setTitle(e.target.value);
          }}
          value={tempTitle}
        />
        <Input
          placeholder="Content"
          id="content"
          onChange={(e) => {
            setTempContent(e.target.value);
            setContent(e.target.value);
          }}
          value={tempContent}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default Field;
