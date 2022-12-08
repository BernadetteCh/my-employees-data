import React from "react";
import Table from "react-bootstrap/Table";
import TableRow from "./EmployeeTableRow";

const EmployeeTable = ({ employeesData, renderData }) => {
  const updateData = (data) => {
    renderData(data);
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
                  key={employee._id}
                  myKey={index}
                  updateData={updateData}
                />
              );
            })}
      </tbody>
    </Table>
  );
};
export default EmployeeTable;