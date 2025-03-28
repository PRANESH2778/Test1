import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Navbar.css';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Track window size to determine mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNavbar = () => {
    setIsCollapsed(true);
    setDropdownOpen(false); // Close dropdown
  };

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent default link behavior for the dropdown arrow
    if (isMobile) {
      setDropdownOpen(!dropdownOpen); // Toggle dropdown only in mobile view
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" onClick={closeNavbar}>
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarSupportedContent"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeNavbar}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/solutions" onClick={closeNavbar}>
              Solutions
            </Link>
          </li>
          <li
            className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}
            onMouseEnter={() => !isMobile && setDropdownOpen(true)} // Enable hover for desktop
            onMouseLeave={() => !isMobile && setDropdownOpen(false)} // Disable hover for desktop
          >
            <div className="d-flex align-items-center">
              {/* "Services" navigates to the services page */}
              <Link
                className="nav-link"
                to="/services"
                onClick={() => {
                  if (!isMobile) closeNavbar();
                }}
              >
                Services
              </Link>
              {/* Dropdown arrow toggles the menu for mobile */}
              <span
                className={`nav-link dropdown-toggle ${isMobile ? "dropdown-toggle-mobile" : ""}`}
                style={{ cursor: "pointer",paddingLeft:"0px"}}
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              ></span>
            </div>
            {/* Dropdown menu */}
            <div
              className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
              aria-labelledby="navbarDropdown"
            >
              <Link
                className="dropdown-item"
                to="/DirectTaxation"
                onClick={closeNavbar}
              >
                Direct Taxation
              </Link>
              <Link
                className="dropdown-item"
                to="/AccountingBookkeeping"
                onClick={closeNavbar}
              >
                Accounting & Bookkeeping
              </Link>
              <Link
                className="dropdown-item"
                to="/AuditAssurance"
                onClick={closeNavbar}
              >
                Audit & Assurance
              </Link>
              <Link
                className="dropdown-item"
                to="/BusinessAdvisory"
                onClick={closeNavbar}
              >
                Business Advisory
              </Link>
              <Link
                className="dropdown-item"
                to="/ForeignExchangeMatters"
                onClick={closeNavbar}
              >
                Foreign Exchange Matters
              </Link>
              <Link
                className="dropdown-item"
                to="/GSTIndirectTaxes"
                onClick={closeNavbar}
              >
                GST & Indirect Taxes
              </Link>
              <Link
                className="dropdown-item"
                to="/InternationalTaxationFEMA"
                onClick={closeNavbar}
              >
                International Taxation & FEMA
              </Link>
              <Link
                className="dropdown-item"
                to="/StartupSMEServices"
                onClick={closeNavbar}
              >
                Startup & SME Services
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to="/something-else"
                onClick={closeNavbar}
              >
                Something else here
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/team" onClick={closeNavbar}>
              Our Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus" onClick={closeNavbar}>
              Contact Us
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
