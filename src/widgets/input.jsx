import "./stylesheets/input.css";

function Input(props) {
  return (
    <label className={`wrapper ${props.className}`}>
      <input
        id={props.id}
        name={props.name}
        type={props.type ?? "text"}
        placeholder=" "
        onChange={props.onChange}
      />
      <span>{props.placeholder}</span>
    </label>
  );
}

export default Input;
