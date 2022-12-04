import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TableRow from "../components/TableRow";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api");
      const data = await response.json();

      if (!response.ok) {
        console.log(`Error:${response.status} ${response.statusText}`);
      }
      setData(data);
    };
    fetchData();
  }, [data]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Employees Data 🙃🍀</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data === []
            ? console.log("..loading")
            : data.map((employee, index) => {
                return (
                  <TableRow
                    employee={employee}
                    employees={data}
                    key={employee._id}
                    myKey={index}
                  />
                );
              })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
