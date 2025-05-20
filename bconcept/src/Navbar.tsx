import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent the default routing behavior
    window.scrollBy({ top: 1000, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo-img">
        <img src="/bconcept_logo.png" alt="BConcept Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><Link to="/" onClick={handleLinkClick}>Client</Link></li>
        <li><Link to="/" onClick={handleLinkClick}>Work</Link></li>
        <li><Link to="/" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/" onClick={handleLinkClick}>Recruitment</Link></li>
        <li><Link to="/" onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
}
