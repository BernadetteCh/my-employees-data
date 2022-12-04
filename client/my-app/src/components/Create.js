import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../App.css";

const Create = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    position: "",
    level: "",
  });

  const upDateInputValue = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveData = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-create">
      <h2>Create a new Employee</h2>
      <form>
        <label className="d-block">Name:</label>
        <input
          type="text"
          name="name"
          value={inputValue.name}
          onChange={upDateInputValue}
        ></input>
        <label className="d-block">Position:</label>
        <input
          type="text"
          name="position"
          value={inputValue.position}
          onChange={upDateInputValue}
        ></input>
        <label className="d-block">Level:</label>
        <input
          type="radio"
          id="intern"
          name="level"
          value="intern"
          onChange={upDateInputValue}
        />
        <label htmlFor="intern" className="me-5">
          Intern
        </label>
        <input
          type="radio"
          id="junior-developer"
          name="level"
          value="junior-developer"
          onChange={upDateInputValue}
        ></input>
        <label htmlFor="junior-developer" className="me-5">
          Junior Developer
        </label>
        <input
          type="radio"
          id="senior-developer"
          name="level"
          value="senior-developer"
          onChange={upDateInputValue}
        ></input>
        <label htmlFor="senior-developer" className="me-5">
          Senior Developer
        </label>
        <Button type="submit" className="submit-button" onClick={saveData}>
          Create new Employee
        </Button>
      </form>
    </div>
  );
};

export default Create;
