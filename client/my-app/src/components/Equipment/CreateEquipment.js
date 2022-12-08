import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../App.css";
import Input from "../Input";

const CreateEquipment = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    type: "",
    amount: "",
  });
  const url = "http://localhost:8080/equipment/create";
  const navigate = useNavigate();

  const upDateInputValue = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const saveData = async (e) => {
    e.preventDefault();
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
      console.log(`Error: ${response.status} ${response.statusText}`);
    }
    setInputValue({
      name: "",
      type: "",
      amount: "",
    });

    navigate("/");
  };

  return (
    <div className="form-create">
      <h2>Create a new Equipment</h2>
      <form>
        <label className="d-block">Name</label>
        <Input
          type={"text"}
          name="name"
          value={inputValue.name}
          upDateInputValue={upDateInputValue}
        />
        <label className="d-block">Type</label>
        <Input
          type={"text"}
          name={"type"}
          value={inputValue.type}
          upDateInputValue={upDateInputValue}
        />
        <label className="d-block">Amount</label>
        <Input
          type={"number"}
          name={"amount"}
          value={inputValue.amount}
          upDateInputValue={upDateInputValue}
        />
        <Button type="submit" className="submit-button" onClick={saveData}>
          Create new Equipment
        </Button>
      </form>
    </div>
  );
};

export default CreateEquipment;
