import React from "react";
import Option from "../Option";

const sortOptions = [
  {
    sort: "firstName",
  },
  { sort: "secondName" },
  { sort: "lastName" },
  { sort: "position" },
  { sort: "level" },
];

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
        {sortOptions.map((sort, index) => {
          return <Option value={sort.sort} option={sort.sort} key={index} />;
        })}
      </select>
    </div>
  );
};
export default SortList;
