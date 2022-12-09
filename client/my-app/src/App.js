import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import CreateEmployee from "../src/components/Employee/Create";
import CreateEquipment from "./components/Equipment/CreateEquipment";
import Home from "../src/components/Home";
import Edit from "../src/components/Employee/Edit";
import EditEquipment from "./components/Equipment/EditEquipment";
import EquipmentEmployeeList from "./components/EquipmentEmployeeList";
import "./App.css";

function App() {
  const [equipment, setEquipment] = useState([]);

  const dataSetter = (equipment) => {
    setEquipment(equipment);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home dataSetterEquipment={dataSetter} />}
          ></Route>
          <Route
            path="/create"
            element={<CreateEmployee equipmentData={equipment} />}
          ></Route>
          <Route path="/create-equipment" element={<CreateEquipment />}></Route>
          <Route path="/edit/equipment/:id" element={<EditEquipment />}></Route>
          <Route
            path="/amount-list"
            element={<EquipmentEmployeeList />}
          ></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
