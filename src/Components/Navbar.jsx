import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-img">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Me</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/blog">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="nav-connect">Contact With Me</div>
    </div>
  );
};

export default Navbar;
