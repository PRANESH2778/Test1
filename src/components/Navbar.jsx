import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import logo from '../assets/logo.jpg'
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logoImage" />
        </Link>
      </div>
      <ul className={isMobile ? "navmobilelink" : "navlink"} onClick={() => setIsMobile(false)}>
        <Link to="/" className="Home">
          <li>Home</li>
        </Link>
        <Link to="/aboutus" className="About">
          <li>About</li>
        </Link>
        <Link to="/team" className="Contact">
          <li>Team</li>
        </Link>
        <Link to="/solutions" className="Contact">
          <li>Solutions</li>
        </Link>
        <Link to="/services" className="Contact">
          <li>Services</li>
        </Link>
        <Link to="/approach" className="Approach">
          <li>Approach</li>
        </Link>
        <Link to="/contactus" className="Contact">
          <li>Contact</li>
        </Link>

      </ul>
      <button className="mobMenuIcon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />} {/* Use icons for toggle */}
      </button>
    </nav>
  );
};

export default Navbar;
