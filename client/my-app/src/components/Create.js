import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";

const Create = () => {
  return (
    <div className="form-create">
      <h2>Create a new Employee</h2>
      <form>
        <label>Name:</label>
        <input type="text"></input>
        <label>Position:</label>
        <input type="text"></input>
        <label>Level:</label>
        <input type="text"></input>
        <Button type="submit" className="submit-button">
          Create new Employee
        </Button>
      </form>
    </div>
  );
};

export default Create;
