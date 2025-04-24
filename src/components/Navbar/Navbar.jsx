import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
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
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  };

  const toggleDropdown = (event, dropdownSetter) => {
    event.preventDefault();
    if (isMobile) {
      dropdownSetter((prevState) => !prevState);
    }
  };

  return (
    <>
      {!isMobile && (
        <div className="top-bar">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="contact-info">
              <span><FaEnvelope /> <a href="mailto:abandco.surat@gmail.com">abandco.surat@gmail.com</a></span>
              <span><FaPhone /> <a href="tel:+912614531968">0261-4531968</a></span>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      )}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container" style={{ margin: "0" }}>
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            Navbar
          </Link>

          <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={!isCollapsed}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarSupportedContent">
            {isMobile && (
              <div className="mobile-contact">
                <p><FaEnvelope /> <a href="mailto:abandco.surat@gmail.com">abandco.surat@gmail.com</a></p>
                <p><FaPhone /> <a href="tel:+912614531968">0261-4531968</a></p>
              </div>
            )}

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
              </li>

              {/* Solutions Dropdown */}
              <li 
                className={`nav-item dropdown ${solutionsDropdownOpen ? "show" : ""}`}
                onMouseEnter={() => !isMobile && setSolutionsDropdownOpen(true)}
                onMouseLeave={() => !isMobile && setSolutionsDropdownOpen(false)}
              >
                <div className="d-flex align-items-center">
                  <Link className="nav-link" to="/solutions" onClick={() => { if (!isMobile) closeNavbar(); }}>Solutions</Link>
                  <span 
                    className={`nav-link dropdown-toggle ${isMobile ? "dropdown-toggle-mobile" : ""}`}
                    style={{ cursor: "pointer", paddingLeft: "0px" }}
                    onClick={(e) => toggleDropdown(e, setSolutionsDropdownOpen)}
                    aria-haspopup="true"
                    aria-expanded={solutionsDropdownOpen}
                  ></span>
                </div>
                <div className={`dropdown-menu ${solutionsDropdownOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/DataAnalysisandBusinessInsights" onClick={closeNavbar}>DataAnalysisandBusinessInsights</Link>
                  <Link className="dropdown-item" to="/IndirectTaxAdvisoryandLitigationSupport" onClick={closeNavbar}>IndirectTaxAdvisoryandLitigationSupport</Link>
                  <Link className="dropdown-item" to="/IndustrySpecificAdvisoryandComplianceSolutions" onClick={closeNavbar}>IndustrySpecificAdvisoryandComplianceSolutions</Link>
                  <Link className="dropdown-item" to="/InternalAuditandMISReporting" onClick={closeNavbar}>InternalAuditandMISReporting</Link>
                  <Link className="dropdown-item" to="/OutsourcedAccountingandBookkeeping" onClick={closeNavbar}>OutsourcedAccountingandBookkeeping</Link>
                </div>
              </li>

              {/* Services Dropdown */}
              <li 
                className={`nav-item dropdown ${servicesDropdownOpen ? "show" : ""}`}
                onMouseEnter={() => !isMobile && setServicesDropdownOpen(true)}
                onMouseLeave={() => !isMobile && setServicesDropdownOpen(false)}
              >
                <div className="d-flex align-items-center">
                  <Link className="nav-link" to="/services" onClick={() => { if (!isMobile) closeNavbar(); }}>Services</Link>
                  <span 
                    className={`nav-link dropdown-toggle ${isMobile ? "dropdown-toggle-mobile" : ""}`}
                    style={{ cursor: "pointer", paddingLeft: "0px" }}
                    onClick={(e) => toggleDropdown(e, setServicesDropdownOpen)}
                    aria-haspopup="true"
                    aria-expanded={servicesDropdownOpen}
                  ></span>
                </div>
                <div className={`dropdown-menu ${servicesDropdownOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/DirectTaxation" onClick={closeNavbar}>Direct Taxation</Link>
                  <Link className="dropdown-item" to="/AccountingBookkeeping" onClick={closeNavbar}>Accounting & Bookkeeping</Link>
                  <Link className="dropdown-item" to="/AuditAssurance" onClick={closeNavbar}>Audit & Assurance</Link>
                  <Link className="dropdown-item" to="/BusinessAdvisory" onClick={closeNavbar}>Business Advisory</Link>
                  <Link className="dropdown-item" to="/ForeignExchangeMatters" onClick={closeNavbar}>Foreign Exchange Matters</Link>
                  <Link className="dropdown-item" to="/GSTIndirectTaxes" onClick={closeNavbar}>GST & Indirect Taxes</Link>
                  <Link className="dropdown-item" to="/InternationalTaxationFEMA" onClick={closeNavbar}>International Taxation & FEMA</Link>
                  <Link className="dropdown-item" to="/StartupSMEServices" onClick={closeNavbar}>Startup & SME Services</Link>
                  <div className="dropdown-divider"></div>
                  {/* <Link className="dropdown-item" to="/something-else" onClick={closeNavbar}>Something else here</Link> */}
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blogs" onClick={closeNavbar}>Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team" onClick={closeNavbar}>Our Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus" onClick={closeNavbar}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
