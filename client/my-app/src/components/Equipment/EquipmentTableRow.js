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
  // const selectEmployee = async (e) => {
  //   const response = await fetch("http://localhost:8080/equipment/assignList", {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ equipment, employee: e.target.value }),
  //   });
  //   if (!response.ok) {
  //     console.log(`Error: ${response.status}`);
  //   }
  // };
  return (
    <tr>
      <td>{equipment.name}</td>
      <td>{equipment.type}</td>
      <td>{equipment.amount}</td>
      {/* <td>
        <select onChange={selectEmployee}>
          <option defaultValue="select">Select</option>
          {employeeData.map((employee) => {
            return (
              <option value={employee.firstName}>{employee.firstName}</option>
            );
          })}
        </select>
      </td> */}
      <td>
        <Link>Edit</Link> | <Button onClick={deleteEquipment}>Delete</Button>
      </td>
    </tr>
  );
};
export default EquipmentTableRow;
