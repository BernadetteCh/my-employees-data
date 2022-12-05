import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const EquipmentTableRow = ({ equipment, equipments, myKey }) => {
  return (
    <tr>
      <td>{equipment.name}</td>
      <td>{equipment.type}</td>
      <td>{equipment.amount}</td>
      <td>
        <Link>Edit</Link> | <Button>Delete</Button>
      </td>
    </tr>
  );
};
export default EquipmentTableRow;
