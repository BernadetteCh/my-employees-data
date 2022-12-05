import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TableRow from "../components/TableRow";
import SortList from "../components/SortList";
import FilterList from "../components/FilterList";

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
  }, []);

  const updateData = (data) => {
    setData(data);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Employees Data 🙃🍀</h1>
      <p>Sort List </p>
      <SortList updateData={updateData} />
      <p>Filter List</p>
      <FilterList employees={data} updateData={updateData} />
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
          {data === []
            ? console.log("..loading")
            : data.map((employee, index) => {
                return (
                  <TableRow
                    employee={employee}
                    employees={data}
                    key={employee._id}
                    myKey={index}
                    updateData={updateData}
                  />
                );
              })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
