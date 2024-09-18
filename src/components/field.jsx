import { Component } from "react";
import Input from "./../widgets/input";
import "./../stylesheets/field.css";

class Field extends Component {
  render() {
    return (
      <div className="float">
        <form>
          <h1>Todo Form</h1>
          <Input placeholder="Test" />
        </form>
      </div>
    );
  }
}

export default Field;
