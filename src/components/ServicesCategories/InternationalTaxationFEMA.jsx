import React from "react";
import "./ServicePage.css";

const InternationalTaxationFEMA = () => {
  const details = [
    "Cross Border Tax Advisory",
    "DTAA Advisory",
    "FEMA Compliances",
    "Foreign Subsidiary Setup & Compliances",
  ];

  return (
    <div className="service-page-container">
      <h1 className="service-title">International Taxation & FEMA</h1>
      <p className="service-description">
        We specialize in International Taxation and FEMA compliance to help
        businesses navigate cross-border taxation and regulatory requirements.
        Our expert solutions ensure compliance and optimized strategies for
        global operations.
      </p>
      <ul className="service-list">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternationalTaxationFEMA;
