import React from "react";
import Table from "react-bootstrap/Table";
import EquipmentTableRow from "../components/EquipmentTableRow";

const EquipmentTable = ({ equipmentData, updateData, employeeData }) => {
  const updateEquipmentList = (data) => {
    updateData(data);
  };
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>amount</th>
          <th>Assign Employee</th>
        </tr>
      </thead>
      <tbody>
        {equipmentData === []
          ? console.log("..loading")
          : equipmentData.map((equipment, index) => {
              return (
                <EquipmentTableRow
                  equipment={equipment}
                  equipments={equipmentData}
                  key={equipment._id}
                  myKey={index}
                  updateData={updateEquipmentList}
                  employeeData={employeeData}
                />
              );
            })}
      </tbody>
    </Table>
  );
};

export default EquipmentTable;
