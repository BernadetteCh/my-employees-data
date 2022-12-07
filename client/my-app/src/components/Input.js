import React from "react";

const Input = ({ type, name, value, upDateInputValue }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={upDateInputValue}
    ></input>
  );
};
export default Input;
