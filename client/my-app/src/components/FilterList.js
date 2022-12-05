import React, { useState, useEffect } from "react";

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
      <input
        type="radio"
        name="radio-button"
        value="position"
        onChange={getFilterValue}
      ></input>
      <label>Level</label>
      <input
        type="radio"
        name="radio-button"
        value="level"
        onChange={getFilterValue}
      ></input>
      <input
        type="text"
        placeholder="filterable by Position & Level"
        value={inputValue}
        onChange={getInputValue}
        className="d-block"
      ></input>
    </div>
  );
};

export default FilterList;
