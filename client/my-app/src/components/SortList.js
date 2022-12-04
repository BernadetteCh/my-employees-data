import React from "react";

const SortList = ({ updateData }) => {
  const sortList = async (e) => {
    const response = await fetch(`http://localhost:8080/api/${e.target.value}`);
    const data = await response.json();

    if (!response.ok) {
      console.log(`Error : ${response.status} ${response.statusText}`);
    }
    console.log(data);
    updateData(data);
  };

  return (
    <div>
      <select name="option" onChange={sortList}>
        <option defaultValue="select">Select</option>
        <option value="firstName">FirstName</option>
        <option value="secondName">SecondName</option>
        <option value="lastName">LastName</option>
        <option value="position">Postion</option>
        <option value="level">Level</option>
      </select>
    </div>
  );
};
export default SortList;
