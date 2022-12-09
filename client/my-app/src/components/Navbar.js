import React from "react";
import { Link } from "react-router-dom";
import logos from "../images/technology-logos.png";

const Navbar = () => {
  return (
    <ul className="navbar">
      <Link to="/" className="navbar-link">
        <img src={logos} alt="technology-icons" className="logos"></img>
      </Link>
      <Link to="/amount-list" className="navbar-link">
        Amount Employee List
      </Link>
      <Link to="/create-equipment" className="navbar-link">
        Create Equipment
      </Link>
      <Link to="/create" className="navbar-link">
        Create Employee
      </Link>
    </ul>
  );
};

export default Navbar;
