import React from "react";

const Input = ({ type, name, value, upDateInputValue, min, max }) => {
  return (
    <input
      type={type}
      name={name}
      min={min}
      max={max}
      value={value}
      onChange={upDateInputValue}
    ></input>
  );
};
export default Input;
