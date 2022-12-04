import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ employee, key }) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.position}</td>
      <td>{employee.level}</td>
      <td>
        <Link to="/edit">Edit</Link> | <Link to="delete">Delete</Link>
      </td>
    </tr>
  );
};
export default TableRow;
