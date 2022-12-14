import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Input from "../Input";
import { Link } from "react-router-dom";

// const fetchData = async (myKey, presentboolean) => {
//   const response = await fetch(
//     `http://localhost:8080/api/attendance/${myKey}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({ present: presentboolean }),
//     }
//   );
//   if (!response.ok) {
//     console.log(`${response.status}`);
//   }
// };

const TableRow = ({ employee, employees, myKey, index, updateBothTables }) => {
  const [present, setPresent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/attendance/${myKey}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ present: present }),
        }
      );
      if (!response.ok) {
        console.log(`${response.status}`);
      }
    };
    fetchData();
  }, [present]);
  // if (present == true) {
  //   fetchData(myKey, present);
  // }

  const checkAttendance = async (e) => {
    setPresent((present) => !present);
  };
  const deleteEmployee = async () => {
    // const id = employee._id;
    const putUrl = `http://localhost:8080/equipment/updateEquipment/deleteEmployee`;
    const putresponse = await fetch(`${putUrl}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        equipment: employee.equipment,
        amountOfEmployee: employee.amount,
      }),
    });

    const url = `http://localhost:8080/api/delete/${myKey}`;
    const response = await fetch(`${url}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ employee }),
    });

    if (!putresponse.ok) {
      console.log(`Error: ${putresponse.status} ${putresponse.statusText}`);
    }
    if (!response.ok) {
      console.log(`Error: ${response.status} ${response.statusText}`);
    } else {
      const newEmployeesData = [...employees];
      newEmployeesData.splice(index, 1);
      const newEquipmentAmountData = await putresponse.json();
      updateBothTables(newEmployeesData, newEquipmentAmountData);
    }
  };
  console.log(present);
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.secondName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.position}</td>
      <td>{employee.level}</td>
      <td>
        <Input
          value={present}
          type={"checkbox"}
          upDateInputValue={checkAttendance}
        />
      </td>
      <td>
        <Link to={`/edit/${myKey}`}>Edit</Link> |
        <Button variant="secondary" type="submit" onClick={deleteEmployee}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default TableRow;
