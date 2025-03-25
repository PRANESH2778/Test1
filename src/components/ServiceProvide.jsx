import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for navigation
import {
  FaBalanceScale,
  FaMoneyCheckAlt,
  FaBook,
  FaClipboardCheck,
  FaLightbulb,
  FaRocket,
  FaGlobe,
  FaExchangeAlt,
} from "react-icons/fa"; // Import specific icons
import "./ServiceProvide.css";

const ServiceProvide = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Direct Taxation",
      description: "View More",
      icon: <FaBalanceScale size={50} color="#ff5733" />, // Red icon
      link: "/DirectTaxation", // Route for this service
    },
    {
      title: "GST & Indirect Taxes",
      description: "View More",
      icon: <FaMoneyCheckAlt size={50} color="#28a745" />, // Green icon
      link: "/GSTIndirectTaxes", // Route for this service
    },
    {
      title: "Accounting & Bookkeeping",
      description: "View More",
      icon: <FaBook size={50} color="#ffc107" />, // Yellow icon
      link: "/AccountingBookkeeping", // Route for this service
    },
    {
      title: "Audit & Assurance",
      description: "View More",
      icon: <FaClipboardCheck size={50} color="#007bff" />, // Blue icon
      link: "/AuditAssurance", // Route for this service
    },
    {
      title: "Business Advisory",
      description: "View More",
      icon: <FaLightbulb size={50} color="#6c757d" />, // Grey icon
      link: "/BusinessAdvisory", // Route for this service
    },
    {
      title: "Startup & SME Services",
      description: "View More",
      icon: <FaRocket size={50} color="#17a2b8" />, // Teal icon
      link: "/StartupSMEServices", // Route for this service
    },
    {
      title: "International Taxation & FEMA",
      description: "View More",
      icon: <FaGlobe size={50} color="#343a40" />, // Dark icon
      link: "/InternationalTaxationFEMA", // Route for this service
    },
    {
      title: "FOREIGN EXCHANGE MATTERS",
      description: "View More",
      icon: <FaExchangeAlt size={50} color="#FACC15" />, // Updated color for FOREIGN EXCHANGE MATTERS
      link: "/ForeignExchangeMatters", // Route for this service
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">SERVICES WE PROVIDE</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-head-title">{service.title}</h3>
            <Link to={service.link} className="service-description">
              {service.description}
            </Link>
          </div>
        ))}
      </div>
      {/* Add "Know More" button below the section */}
      <div className="know-more-container">
        <button
          className="know-more-button"
          onClick={() => navigate("/services")}
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default ServiceProvide;
