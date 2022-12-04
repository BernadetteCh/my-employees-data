import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Home from "./components/Home";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/delete" element={<Delete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
