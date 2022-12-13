import React from "react";

const Input = ({
  type,
  name,
  value,
  upDateInputValue,
  min,
  max,
  autoFocus,
}) => {
  return (
    <input
      type={type}
      name={name}
      min={min}
      max={max}
      value={value}
      autoFocus={autoFocus}
      onChange={upDateInputValue}
    ></input>
  );
};
export default Input;
