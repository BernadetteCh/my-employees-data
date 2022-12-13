import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const EquipmentTableRow = ({
  equipment,
  equipments,
  myKey,
  index,
  updateEquipmentData,
}) => {
  const deleteEquipment = async () => {
    const url = `http://localhost:8080/equipment/delete/${myKey}`;
    const response = await fetch(`${url}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      console.log(`Èrror:${response.status}`);
    } else {
      const data = await response.json();
      updateEquipmentData(data);
    }
  };

  return (
    <tr>
      <td>{equipment.name}</td>
      <td>{equipment.type}</td>
      <td>{equipment.amount}</td>
      <td>
        <Link to={`/edit/equipment/${myKey}`}>Edit</Link> |
        <Button onClick={deleteEquipment}>Delete</Button>
      </td>
    </tr>
  );
};
export default EquipmentTableRow;
