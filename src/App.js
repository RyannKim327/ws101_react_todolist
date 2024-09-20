import "./stylesheets/app.css";

import Field from "./components/field";
import Main from "./components/main";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  return (
    <div className="main">
      <Main toggleModal={toggleModal} />
      <Field onHide={toggleModal} isShow={toggle} />
    </div>
  );
}

export default App;
