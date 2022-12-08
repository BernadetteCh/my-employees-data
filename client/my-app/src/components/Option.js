import React from "react";

const Option = ({ value, option, name }) => {
  return (
    <option value={value} name={name}>
      {option}
    </option>
  );
};

export default Option;
