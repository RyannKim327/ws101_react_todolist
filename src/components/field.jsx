import Input from "./../widgets/input";
import "./../stylesheets/field.css";
import { useState } from "react";

function Field(props) {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  if (props.modifyValue !== undefined) {
    if (props.modifyValue.data.length > 0) {
      // alert(JSON.stringify(props.modifyValue));
      const d = props.modifyValue.data;
      setTitle(d.title);
      setContent(d.content);
    }
  }

  const setter = () => {
    const _title = document.getElementById("title");
    const _content = document.getElementById("content");

    if (_title && _content) {
      setTitle(_title.value);
      setContent(_content.value);
    }
  };

  const addToDo = () => {
    if (title.length < 4 || content.length < 10) {
      alert("The minimum text characters for title is 4 and for content is 10");
      return;
    }
    let local = JSON.parse(localStorage.getItem("todo") ?? "[]");
    if (!local) {
      local = [];
    }
    local.push({
      title: title,
      content: content,
      done: false,
    });
    localStorage.setItem("todo", JSON.stringify(local));
  };

  return (
    <div className={`float ${props.className} ${props.isShow ? "show" : ""}`}>
      <span onClick={props.onHide} className="close">
        X
      </span>
      <form onSubmit={addToDo}>
        <h1>Todo Form</h1>
        <Input placeholder="Title" id="title" onChange={setter} value={title} />
        <Input
          placeholder="Content"
          id="content"
          onChange={setter}
          value={content}
        />
        <button>Add ToDo</button>
      </form>
    </div>
  );
}

export default Field;
