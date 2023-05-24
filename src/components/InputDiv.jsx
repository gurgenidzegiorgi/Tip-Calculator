/* eslint-disable react/prop-types */
export default function InputDiv(props) {
  return (
    <div className="inputDiv">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        value={props.value}
        onInput={props.onInput}
        type="text"
        id={props.id}
        placeholder="0"
        style={props.style}
      />
      <img src={props.img} alt="dollar icon" />
    </div>
  );
}
