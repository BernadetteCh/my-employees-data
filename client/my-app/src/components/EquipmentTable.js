import React from "react";
import Table from "react-bootstrap/Table";
import EquipmentTableRow from "../components/EquipmentTableRow";

const EquipmentTable = ({ equipmentData }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>amount</th>
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
                />
              );
            })}
      </tbody>
    </Table>
  );
};

export default EquipmentTable;
