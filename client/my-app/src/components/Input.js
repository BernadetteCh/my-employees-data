import React from "react";

const Input = ({
  type,
  name,
  value,
  upDateInputValue,
  min,
  max,
  autoFocus,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      min={min}
      max={max}
      value={value}
      placeholder={placeholder}
      autoFocus={autoFocus}
      onChange={upDateInputValue}
    ></input>
  );
};
export default Input;
