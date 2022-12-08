import React, { useState, useEffect } from "react";
import Input from "../Input";

const FiltreEquipment = ({ updateData }) => {
  const [filterValue, setFilterValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const sendInputValue = async (inputValue, filterValue, dataSetter) => {
    const response = await fetch(
      `http://localhost:8080/equipment/filter/${filterValue}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      }
    );

    if (!response.ok) {
      console.log(`Error:${response.status}`);
    } else {
      const data = await response.json();
      dataSetter(data);
    }
  };

  const displayAllEquipments = async (dataSetter) => {
    const response = await fetch(`http://localhost:8080/equipment`);
    const data = await response.json();

    if (!response.ok) {
      console.log(`Èrror:${response.status}`);
    } else {
      dataSetter(data);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        (filterValue === "name" && inputValue !== "") ||
        (filterValue === "type" && inputValue !== "")
      ) {
        sendInputValue(inputValue, filterValue, updateData);
      } else {
        displayAllEquipments(updateData);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const getFilterValue = (e) => {
    setFilterValue(e.target.value);
  };
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label>Name</label>
      <Input
        type={"radio"}
        name={"radio-button"}
        value={"name"}
        upDateInputValue={getFilterValue}
      />
      <label>Type</label>
      <Input
        type={"radio"}
        name={"radio-button"}
        value={"type"}
        upDateInputValue={getFilterValue}
      />
      <div>
        <Input
          type={"text"}
          name={"name"}
          value={inputValue}
          upDateInputValue={getInputValue}
        />
      </div>
    </div>
  );
};

export default FiltreEquipment;
