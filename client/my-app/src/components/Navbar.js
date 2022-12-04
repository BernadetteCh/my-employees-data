import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar">
      <Link to="/" className="navbar-link"></Link>
      <Link to="/create" className="navbar-link">
        Create
      </Link>
    </ul>
  );
};

export default Navbar;
