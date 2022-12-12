import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TableRow from "./EmployeeTableRow";

const fetchIncomeAge = async (dataSetter) => {
  const url = "http://localhost:8080/income/age";
  const response = await fetch(`${url}`);
  const data = await response.json();
  dataSetter(data);
};

const EmployeeTable = ({ employeesData, updateBothTables }) => {
  const [incomeAgeData, setIncomeAgeData] = useState([]);

  const updateBothTablesData = (employees, equipments) => {
    updateBothTables(employees, equipments);
  };
  // useEffect(() => {
  //   fetchIncomeAge(setIncomeAgeData);
  // }, []);
  // console.log(incomeAgeData);
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
          <th>Age</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>
        {employeesData === []
          ? console.log("..loading")
          : employeesData.map((employee, index) => {
              console.log(employee);
              return (
                <TableRow
                  employee={employee}
                  employees={employeesData}
                  key={employee._id}
                  myKey={employee._id}
                  updateBothTables={updateBothTablesData}
                />
              );
            })}
      </tbody>
    </Table>
  );
};
export default EmployeeTable;
