import React, { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import SortList from "../components/SortList";
import FilterList from "../components/FilterList";
import EquipmentTable from "./EquipmentTable";

const fetchEmployeesData = async (dataSetter) => {
  const response = await fetch("http://localhost:8080/api");
  const data = await response.json();

  if (!response.ok) {
    console.log(`Error:${response.status} ${response.statusText}`);
  }
  dataSetter(data);
};

const fetchEquipmentData = async (dataSetter) => {
  const response = await fetch("http://localhost:8080/equipment");
  const data = await response.json();

  if (!response.ok) {
    console.log(`Error: ${response.status} ${response.statusText}`);
  }
  dataSetter(data);
};

const Home = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchEmployeesData(setEmployeeData);
      await fetchEquipmentData(setEquipmentData);
    };

    fetchData();
  }, []);

  const updateData = (data) => {
    setEmployeeData(data);
  };
  console.log(equipmentData);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Employees Data 🙃🍀</h1>
      <p>Sort List </p>
      <SortList updateData={updateData} />
      <p>Filter List</p>
      <FilterList employees={employeeData} updateData={updateData} />
      <EmployeeTable employeesData={employeeData} renderData={updateData} />
      <h2>Equipment Table</h2>
      <EquipmentTable equipmentData={equipmentData} />
    </div>
  );
};

export default Home;
