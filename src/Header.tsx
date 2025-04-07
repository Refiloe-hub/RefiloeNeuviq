import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";  // Importing separate CSS

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/editedlogo.png" alt="Neuviq Solutions Logo" />
        </Link>
      </div>
      <nav>
        {/* Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "active" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/Insights">Tech Hub</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;