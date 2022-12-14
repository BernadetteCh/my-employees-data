import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import "../../App.css";
import Input from "../Input";
import Option from "../Option";

const fetchEquipmentData = async (dataSetter) => {
  const url = "http://localhost:8080/equipment";
  const response = await fetch(`${url}`);
  const data = await response.json();
  dataSetter(data);
};

const CreateEmployee = () => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    position: "",
    level: "",
    equipment: "",
    amount: 0,
    years: 0,
  });
  const [equipmentData, setEquipmentData] = useState([]);
  const [max, setMax] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEquipmentData(setEquipmentData);
  }, []);

  const upDateInputValue = (e) => {
    // console.log(e.target.name);
    // console.log(e.taget.value);
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectEquipment = (e) => {
    setMaxAmount(e.target.value);
  };

  const setMaxAmount = (value) => {
    equipmentData.map((equipment) => {
      if (equipment._id === value) {
        setInputValue(
          (prev) => ({
            ...prev,
            equipment: value,
            // amount: equipment.amount,
          }),
          setMax(equipment.amount)
        );
      }
      return true;
    });
  };

  const upDateAmountOfEquipment = (e) => {
    setInputValue((prev) => ({
      ...prev,
      amount: e.target.value,
    }));
  };
  const saveWorkingYears = (e) => {
    setInputValue((prev) => ({
      ...prev,
      years: e.target.value,
    }));
  };
  const saveData = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    const url = "http://localhost:8080/api/save/newemployee";
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        inputValue,
      }),
    });

    const putUrl = `http://localhost:8080/equipment/upDateEquipment/createEmployee`;
    const putResponse = await fetch(`${putUrl}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        amount: inputValue.amount,
        max: max,
        equipment: inputValue.equipment,
      }),
    });

    if (!response.ok) {
      console.log(`Error: ${response.status}`);
      console.log(`${response.statusText}`);
    }
    if (!putResponse.ok) {
      console.log(`Error: ${response.status}`);
    } else {
      const newEquipmentData = await putResponse.json();
      console.log(newEquipmentData);
    }

    setInputValue({
      firstName: "",
      secondName: "",
      lastName: "",
      position: "",
      level: "",
      equipment: "",
      amount: 0,
      years: 0,
    });

    navigate("/");
  };
  console.log(inputValue.level);
  if (inputValue.level === "junior-developer") {
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
            value="senior-developer"
            upDateInputValue={upDateInputValue}
          />
          <label htmlFor="senior-developer" className="me-5">
            Senior Developer
          </label>
          <label className="d-block">
            Select an Equipment for an Employee:
          </label>
          <select className="me-5" onChange={selectEquipment}>
            <option defaultValue={"select"}>--Select--</option>
            {equipmentData === []
              ? console.log("...Loading")
              : equipmentData.map((equipment, index) => {
                  return (
                    <Option
                      value={equipment._id}
                      option={equipment.name}
                      key={index}
                    />
                  );
                })}
          </select>
          <Input
            min={0}
            max={max}
            value={inputValue.amount}
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
  } else {
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
          <label className="d-block">
            Select an Equipment for an Employee:
          </label>
          <select className="me-5" onChange={selectEquipment}>
            <option defaultValue={"select"}>--Select--</option>
            {equipmentData === []
              ? console.log("...Loading")
              : equipmentData.map((equipment, index) => {
                  return (
                    <Option
                      value={equipment._id}
                      option={equipment.name}
                      key={index}
                    />
                  );
                })}
          </select>
          <Input
            min={0}
            max={max}
            value={inputValue.amount}
            type="number"
            name="amount"
            upDateInputValue={upDateAmountOfEquipment}
          />
          <label className="d-block">Years of Experience:</label>
          <Input
            type="number "
            value={inputValue.years}
            upDateInputValue={saveWorkingYears}
          />
          <Button type="submit" className="submit-button" onClick={saveData}>
            Create new Employee
          </Button>
        </form>
      </div>
    );
  }
};

export default CreateEmployee;
