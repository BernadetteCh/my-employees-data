import React from "react";
import Button from "react-bootstrap/Button";
import "../../App.css";
import Input from "../Input";
import Option from "../Option";
const Form = () => {
  return (
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
  );
};
export default Form;
