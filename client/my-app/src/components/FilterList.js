import React, { useState, useEffect } from "react";
import Input from "./Input";

const sendInput = async (inputValue, filterValue, updateData) => {
  const response = await fetch(`http://localhost:8080/api/filter`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ filterValue, inputValue }),
  });

  if (!response.ok) {
    console.log(`Error: ${response.status}${response}`);
  } else {
    const data = await response.json();
    updateData(data);
  }
};

const displayAllEmployees = async (updateData) => {
  const response = await fetch("http://localhost:8080/api");
  const data = await response.json();

  if (!response.ok) {
    console.log(`Error:${response.status}`);
  }
  updateData(data);
};

const FilterList = ({ employees, updateData }) => {
  const [filterValue, setFilterValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        (inputValue !== "" && filterValue === "position") ||
        (inputValue !== "" && filterValue === "level")
      ) {
        sendInput(inputValue, filterValue, updateData);
      } else {
        displayAllEmployees(updateData);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, filterValue]);

  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const getFilterValue = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <label>Position</label>
      <Input
        type={"radio"}
        name={"radio-button"}
        value={"position"}
        upDateInputValue={getFilterValue}
      />
      <label>Level</label>
      <Input
        type={"radio"}
        name={"radio-button"}
        value={"level"}
        upDateInputValue={getFilterValue}
      />
      <div>
        <Input
          type={"text"}
          value={inputValue}
          upDateInputValue={getInputValue}
        />
      </div>
    </div>
  );
};

export default FilterList;
