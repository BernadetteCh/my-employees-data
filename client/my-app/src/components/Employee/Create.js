import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../App.css";
import Input from "../Input";
import Option from "../Option";

const Create = ({ equipmentData }) => {
  const url = "http://localhost:8080/api/save/newemployee";
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    position: "",
    level: "",
    equipment: "",
    amount: "",
  });
  const [num, setNum] = useState(0);

  const upDateInputValue = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const selectEquipment = (e) => {
    setMaxAmount(e.target.value);
  };

  const setMaxAmount = (value) => {
    equipmentData.map((equipment) => {
      if (equipment.name === value) {
        setInputValue((prev) => ({
          ...prev,
          ["equipment"]: value,
          ["amount"]: equipment.amount,
        }));
      }
    });
  };
  const upDateAmountOfEquipment = (e) => {
    console.log(e.target);
    setNum(e.target.value);
  };

  const saveData = async (e) => {
    e.preventDefault(e);
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        inputValue,
      }),
    });

    if (!response.ok) {
      console.log(`Error: ${response.status}`);
      console.log(`${response.statusText}`);
    }

    const { firstName, secondName, lastName, position, level } = inputValue;
    if (
      firstName !== "" ||
      secondName !== "" ||
      lastName !== "" ||
      position !== "" ||
      level !== ""
    ) {
      setInputValue({
        firstName: "",
        secondName: "",
        lastName: "",
        position: "",
        level: "",
      });
    }
    navigate("/");
  };
  console.log(inputValue);
  return (
    <div className="form-create">
      <h2>Create a new Employee</h2>
      <form>
        <label className="d-block">FirstName:</label>
        <Input
          type="text"
          name="firstName"
          value={inputValue.firstName}
          upDateInputValue={upDateInputValue}
        />
        <label className="d-block">SecondName:</label>
        <Input
          type="text"
          name="secondName"
          value={inputValue.secondName}
          upDateInputValue={upDateInputValue}
        />
        <label className="d-block">LastName:</label>
        <Input
          type="text"
          name="lastName"
          value={inputValue.lastName}
          upDateInputValue={upDateInputValue}
        />
        <label className="d-block">Position:</label>
        <Input
          type="text"
          name="position"
          value={inputValue.position}
          upDateInputValue={upDateInputValue}
        />
        <label className="d-block">Level:</label>
        <Input
          type="radio"
          name="level"
          value="intern"
          upDateInputValue={upDateInputValue}
        />
        <label htmlFor="intern" className="me-5">
          Intern
        </label>
        <Input
          type="radio"
          name="level"
          value="junior-developer"
          upDateInputValue={upDateInputValue}
        />
        <label htmlFor="junior-developer" className="me-5">
          Junior Developer
        </label>
        <Input
          type="radio"
          name="level"
          value="junior-developer"
          upDateInputValue={upDateInputValue}
        />
        <label htmlFor="senior-developer" className="me-5">
          Senior Developer
        </label>
        <label className="d-block">Select an Equipment for an Employee:</label>
        <select className="me-5" onChange={selectEquipment}>
          <option defaultValue={"select"}>--Select--</option>
          {equipmentData.map((equipment, index) => {
            return (
              <Option
                value={equipment.name}
                option={equipment.name}
                key={index}
              />
            );
          })}
        </select>
        <Input
          min={0}
          max={parseInt(inputValue.amount)}
          value={num}
          type="number"
          name="amount"
          upDateInputValue={upDateAmountOfEquipment}
        />
        <Button type="submit" className="submit-button" onClick={saveData}>
          Create new Employee
        </Button>
      </form>
    </div>
  );
};

export default Create;
