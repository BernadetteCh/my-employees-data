import React from "react";
import Table from "react-bootstrap/Table";
import TableRow from "./EmployeeTableRow";

const EmployeeTable = ({ employeesData, equipmentData, updateBothTables }) => {
  const updateBothTablesData = (employees, equipments) => {
    updateBothTables(employees, equipments);
  };
  return (
    <Table striped>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>SecondName</th>
          <th>LastName</th>
          <th>Position</th>
          <th>Level</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employeesData === []
          ? console.log("..loading")
          : employeesData.map((employee, index) => {
              return (
                <TableRow
                  employee={employee}
                  employees={employeesData}
                  equipmentData={equipmentData}
                  key={employee._id}
                  myKey={index}
                  updateBothTables={updateBothTablesData}
                />
              );
            })}
      </tbody>
    </Table>
  );
};
export default EmployeeTable;
