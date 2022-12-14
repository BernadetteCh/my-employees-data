import React from "react";

const Input = ({ type, name, value, upDateInputValue, min, max }) => {
  console.log(value);
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
