import React from "react";
import Table from "react-bootstrap/Table";
import TableRow from "./EmployeeTableRow";
import TableHead from "./EmployeeTableHead";

const EmployeeTable = ({ employeesData, updateBothTables, updateData }) => {
  const updateBothTablesData = (employees, equipments) => {
    updateBothTables(employees, equipments);
  };
  const sortList = async (key, method) => {
    const response = await fetch(
      `http://localhost:8080/api/sort/${key}/${method}`
    );
    const data = await response.json();

    updateData(data);
  };
  return (
    <Table striped>
      <TableHead sortList={sortList} />
      <tbody>
        {employeesData === []
          ? console.log("..loading")
          : employeesData.map((employee, index) => {
              return (
                <TableRow
                  employee={employee}
                  employees={employeesData}
                  key={employee._id}
                  myKey={employee._id}
                  index={index}
                  updateBothTables={updateBothTablesData}
                />
              );
            })}
      </tbody>
    </Table>
  );
};
export default EmployeeTable;
