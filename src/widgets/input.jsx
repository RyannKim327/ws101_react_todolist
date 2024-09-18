import "./stylesheets/input.css";

function Input(props) {
  return (
    <label class="wrapper">
      <input type={props.type ?? "text"} />
      <span>{props.placeholder}</span>
    </label>
  );
}

export default Input;
