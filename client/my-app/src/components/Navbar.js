import React from "react";
import { Link } from "react-router-dom";
import logos from "../images/technology-logos.png";

const Navbar = () => {
  return (
    <ul className="navbar">
      <Link to="/" className="navbar-link">
        <img src={logos} alt="technology-icons" className="logos"></img>
      </Link>
      <Link to="/create" className="navbar-link">
        Create
      </Link>
    </ul>
  );
};

export default Navbar;
