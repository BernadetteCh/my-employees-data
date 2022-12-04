import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const TableRow = ({ employee, employees, myKey }) => {
  const deleteEmployee = async (e) => {
    const id = employee._id;
    const response = await fetch(`http://localhost:8080/api/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      console.log(`Error: ${response.status} ${response.statusText}`);
    } else {
      // const newList = [...employees];
      // newList.splice(myKey, 1);
    }
  };
  console.log(employee);
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.secondName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.position}</td>
      <td>{employee.level}</td>
      <td>
        <Link to={`/edit/${employee._id}`}>Edit</Link> |
        <Button variant="secondary" onClick={deleteEmployee}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default TableRow;
