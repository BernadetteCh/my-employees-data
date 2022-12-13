import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Input from "../Input";
import { Link } from "react-router-dom";

const TableRow = ({ employee, employees, myKey, updateBothTables }) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const deleteEmployee = async () => {
    const id = employee._id;
    const putUrl = `http://localhost:8080/equipment/updateEquipment/deleteEmployee`;
    const putresponse = await fetch(`${putUrl}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        equipment: employee.equipment,
        amountOfEmployee: employee.amount,
      }),
    });

    const url = `http://localhost:8080/api/delete/${id}`;
    const response = await fetch(`${url}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ employee }),
    });

    if (!putresponse.ok) {
      console.log(`Error: ${putresponse.status} ${putresponse.statusText}`);
    }
    if (!response.ok) {
      console.log(`Error: ${response.status} ${response.statusText}`);
    } else {
      const newEmployeesData = [...employees];
      newEmployeesData.splice(myKey, 1);
      const newEquipmentAmountData = await putresponse.json();
      updateBothTables(newEmployeesData, newEquipmentAmountData);
    }
  };
  const displayCommentField = () => {
    setDisplayDetails((displayDetails) => !displayDetails);
  };
  const upDateInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const saveComment = async () => {
    const url = `http://localhost:8080/api/comment/${myKey}`;
    const response = await fetch(`${url}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ comment: inputValue }),
    });
  };

  if (displayDetails === true) {
    return (
      <tr>
        <td onClick={displayCommentField}>
          {employee.firstName}
          <Input
            type="text"
            value={inputValue}
            autoFocus="on"
            upDateInputValue={upDateInputValue}
          />
          <Button onClick={saveComment}>Save Comment</Button>
        </td>
        <td>{employee.secondName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.position}</td>
        <td>{employee.level}</td>

        <td>
          <Link to={`/edit/${employee._id}`}>Edit</Link> |
          <Button variant="secondary" type="submit" onClick={deleteEmployee}>
            Delete
          </Button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td onClick={displayCommentField}>{employee.firstName}</td>
        <td>{employee.secondName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.position}</td>
        <td>{employee.level}</td>
        <td>
          <Link to={`/edit/${employee._id}`}>Edit</Link> |
          <Button variant="secondary" type="submit" onClick={deleteEmployee}>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
};
export default TableRow;
