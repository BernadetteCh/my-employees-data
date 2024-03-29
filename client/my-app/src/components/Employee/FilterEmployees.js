import React, { useState, useEffect } from "react";
import Input from "../Input";

const sendInput = async (inputValue, filterValue, updateData) => {
  const url = "http://localhost:8080/api/filter";
  const response = await fetch(`${url}`, {
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
  const url = "http://localhost:8080/api";
  const response = await fetch(`${url}`);
  const data = await response.json();

  if (!response.ok) {
    console.log(`Error:${response.status}`);
  }
  updateData(data);
};

const FilterList = ({ updateData }) => {
  const [filterValue, setFilterValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    if (filterValue === "") {
      setErrorMessage("Please select a method");
    } else {
      setInputValue(e.target.value);
      setErrorMessage("");
    }
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
          name={"filterInput"}
          value={inputValue}
          upDateInputValue={getInputValue}
        />
      </div>
      <div style={{ color: "pink" }}>{errorMessage}</div>
    </div>
  );
};

export default FilterList;
