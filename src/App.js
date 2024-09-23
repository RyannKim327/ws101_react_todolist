import "./stylesheets/app.css";

import Field from "./components/field";
import Main from "./components/main";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [modifyValue, setModifyValue] = useState({
    data: { title: "", content: "" },
    id: -1,
  });

  const toggleModal = () => {
    setModifyValue({ data: { title: "", content: "" }, id: -1 });
    setToggle(!toggle);
  };

  const modVal = (data, id) => {
    setModifyValue({ data, id });
    setTimeout(() => {
      setToggle(!toggle);
    }, 500);
  };

  return (
    <div className="main">
      <Main toggleModal={toggleModal} triggerValue={modVal} />
      <Field onHide={toggleModal} isShow={toggle} modifyVal={modifyValue} />
    </div>
  );
}

export default App;
