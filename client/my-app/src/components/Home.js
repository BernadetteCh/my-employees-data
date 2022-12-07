import React, { useState, useEffect } from "react";
import EmployeeTable from "../components/Employee/EmployeeTable";
import SortList from "../components/Employee/SortList";
import FilterList from "../components/Employee/FilterList";
import EquipmentTable from "../components/Equipment/EquipmentTable";

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

  const updateEmployeeData = (data) => {
    setEmployeeData(data);
  };
  const updateEquipmentData = (data) => {
    setEquipmentData(data);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Employees Data 🙃🍀</h1>
      <p>Sort List </p>
      <SortList updateData={updateEmployeeData} />
      <p>Filter List</p>
      <FilterList employees={employeeData} updateData={updateEmployeeData} />
      <EmployeeTable
        employeesData={employeeData}
        renderData={updateEmployeeData}
      />
      <h2>Equipment Table</h2>
      <EquipmentTable
        equipmentData={equipmentData}
        updateData={updateEquipmentData}
        employeeData={employeeData}
      />
    </div>
  );
};

export default Home;
