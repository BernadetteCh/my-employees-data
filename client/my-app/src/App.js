import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import CreateEmployee from "./components/Employee/CreateEmployee";
import CreateEquipment from "./components/Equipment/CreateEquipment";
import Home from "../src/components/Home";
import EditEmployee from "./components/Employee/EditEmployee";
import EditEquipment from "./components/Equipment/EditEquipment";
import EquipmentEmployeeList from "./components/EquipmentEmployeeList";
import Statistic from "./components/Statistic";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreateEmployee />}></Route>
          <Route path="/create-equipment" element={<CreateEquipment />}></Route>
          <Route path="/edit/equipment/:id" element={<EditEquipment />}></Route>
          <Route
            path="/amount-list"
            element={<EquipmentEmployeeList />}
          ></Route>
          <Route path="/edit/:id" element={<EditEmployee />}></Route>
          <Route
            path="/years-of-experience/:years"
            element={<Statistic />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
