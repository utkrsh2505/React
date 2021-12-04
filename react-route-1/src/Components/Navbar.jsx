import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/Login">Login</Link>
    </div>
  );
}
export default Navbar;
