import React from "react";
import Option from "../Option";

const SortList = ({ updateData }) => {
  const sortList = async (e) => {
    const url = `http://localhost:8080/api/${e.target.value}`;
    const response = await fetch(`${url}`);
    const data = await response.json();
    if (!response.ok) {
      console.log(`Error : ${response.status} ${response.statusText}`);
    }
    updateData(data);
  };

  return (
    <div>
      <select name="option" onChange={sortList}>
        <option defaultValue="select">Select</option>
        <Option value={"firstName"} option={"FirstName"} />
        <Option value={"secondName"} option={"SecondName"} />
        <Option value={"lastName"} option={"LastName"} />
        <Option value={"position"} option={"Position"} />
        <Option value={"level"} option={"Level"} />
      </select>
    </div>
  );
};
export default SortList;
