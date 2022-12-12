import React, { useState, useEffect } from "react";
import EmployeeTable from "../components/Employee/EmployeeTable";
import SortList from "../components/Employee/SortList";
import FilterList from "../components/Employee/FilterEmployees";
import FilterEquipment from "../components/Equipment/FilterEquipment";
import EquipmentTable from "../components/Equipment/EquipmentTable";

const fetchEmployeesData = async (dataSetter) => {
  const response = await fetch("http://localhost:8080/api");
  const data = await response.json();
  console.log(data);
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

  console.log(employeeData);

  const updateEmployeeData = (data) => {
    setEmployeeData(data);
  };
  const updateEquipmentData = (data) => {
    setEquipmentData(data);
  };
  const updateBothTables = (employees, equipments) => {
    setEmployeeData(employees, setEquipmentData(equipments));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Employees Data 🙃🍀</h1>
      <p>Sort List </p>
      <SortList updateData={updateEmployeeData} />
      <p>Filter List</p>
      <FilterList updateData={updateEmployeeData} />
      <EmployeeTable
        employeesData={employeeData}
        updateBothTables={updateBothTables}
      />
      <h2>Equipment Table</h2>
      <FilterEquipment updateData={updateEquipmentData} />
      <EquipmentTable
        equipmentData={equipmentData}
        updateEquipmentData={updateEquipmentData}
      />
    </div>
  );
};

export default Home;
