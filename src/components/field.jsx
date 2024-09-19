import Input from "./../widgets/input";
import "./../stylesheets/field.css";
import { useState } from "react";

function Field() {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

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
    alert(`Title: ${title}\nContent: ${content}`);
  };

  return (
    <div className="float">
      <span className="close">X</span>
      <form>
        <h1>Todo Form</h1>
        <Input placeholder="Title" id="title" onChange={setter} />
        <Input placeholder="Content" id="content" onChange={setter} />
        <button onClick={addToDo}>Add Info</button>
      </form>
    </div>
  );
}

export default Field;
