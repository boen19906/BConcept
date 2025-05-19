import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-img">
      <img src="/bconcept_logo.png" alt="BConcept Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Client</Link></li>
        <li><Link to="/">Work</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Recruitment</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
  );
}
