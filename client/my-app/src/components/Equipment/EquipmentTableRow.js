import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const EquipmentTableRow = ({
  equipment,
  equipments,
  myKey,
  updateData,
  employeeData,
}) => {
  const deleteEquipment = () => {
    const newList = [...equipments];
    newList.splice(myKey, 1);
    updateData(newList);
  };
  return (
    <tr>
      <td>{equipment.name}</td>
      <td>{equipment.type}</td>
      <td>{equipment.amount}</td>
      <td>
        <Link to={`/edit/equipment/${equipment._id}`}>Edit</Link> |
        <Button onClick={deleteEquipment}>Delete</Button>
      </td>
    </tr>
  );
};
export default EquipmentTableRow;
