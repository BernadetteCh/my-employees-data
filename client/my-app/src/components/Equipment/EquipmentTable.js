import React from "react";
import Table from "react-bootstrap/Table";
import EquipmentTableRow from "./EquipmentTableRow";
import "../../App.css";

const EquipmentTable = ({
  equipmentData,
  updateEquipmentData,
  employeeData,
}) => {
  const updateEquipmentList = (data) => {
    updateEquipmentData(data);
  };
  const sortEquipment = async (key, method) => {
    const response = await fetch(
      `http://localhost:8080/equipment/sort/${key}/${method}`
    );
    const data = await response.json();
    updateEquipmentData(data);
  };
  return (
    <Table striped>
      <thead>
        <tr>
          <th>
            Name{" "}
            <button
              className="sortButton"
              onClick={() => sortEquipment("name", "ascending")}
            >
              ⬆
            </button>
            <button
              className="sortButton"
              onClick={() => sortEquipment("name", "descending")}
            >
              ⬇
            </button>
          </th>
          <th>
            Type
            <button
              className="sortButton"
              onClick={() => sortEquipment("type", "ascending")}
            >
              ⬆
            </button>
            <button
              className="sortButton"
              onClick={() => sortEquipment("type", "descending")}
            >
              ⬇
            </button>
          </th>
          <th>
            Amount{" "}
            <button
              className="sortButton"
              onClick={() => sortEquipment("amount", "ascending")}
            >
              {" "}
              ⬆
            </button>
            <button
              className="sortButton"
              onClick={() => sortEquipment("amount", "descending")}
            >
              {" "}
              ⬇
            </button>
          </th>
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
                  updateEquipmentData={updateEquipmentList}
                />
              );
            })}
      </tbody>
    </Table>
  );
};

export default EquipmentTable;
