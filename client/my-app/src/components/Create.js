import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../App.css";

const Create = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    position: "",
    level: "",
  });
  return (
    <div className="form-create">
      <h2>Create a new Employee</h2>
      <form>
        <label className="d-block">Name:</label>
        <input type="text"></input>
        <label className="d-block">Position:</label>
        <input type="text"></input>
        <label className="d-block">Level:</label>
        <input type="radio" id="intern" name="filter" value="intern" />
        <label htmlFor="intern" className="me-5">
          Intern
        </label>
        <input
          type="radio"
          id="junior-developer"
          name="filter"
          value="junior-developer"
        ></input>
        <label htmlFor="junior-developer" className="me-5">
          Junior Developer
        </label>
        <input
          type="radio"
          id="senior-developer"
          name="filter"
          value="senior-developer"
        ></input>
        <label htmlFor="senior-developer" className="me-5">
          Senior Developer
        </label>
        <Button type="submit" className="submit-button">
          Create new Employee
        </Button>
      </form>
    </div>
  );
};

export default Create;
