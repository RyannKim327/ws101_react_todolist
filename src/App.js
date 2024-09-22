import "./stylesheets/app.css";

import Field from "./components/field";
import Main from "./components/main";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [modifyValue, setModifyValue] = useState({ data: {}, id: 0 });

  const toggleModal = () => {
    setToggle(!toggle);
  };

  const modVal = (data, id) => {
    setModifyValue({ data: data, id: id });
    setToggle(!toggle);
  };

  return (
    <div className="main">
      <Main toggleModal={toggleModal} triggerValue={modVal} />
      <Field onHide={toggleModal} isShow={toggle} modifyValue={modifyValue} />
    </div>
  );
}

export default App;
