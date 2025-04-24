import React from "react";
import "./ServicePage.css";

const StartupSMEServices = () => {
  const details = [
    "Startup Incorporation (Company, LLP, Proprietorship)",
    "Funding & Investor Relations Support",
    "Government Scheme Guidance (MSME, Startup India)",
    "Compliance Management",
  ];

  return (
    <div className="service-page-container">
      <h1 className="service-title">Startup & SME Services</h1>
      <p className="service-description">
        Our Startup & SME Services are designed to support emerging businesses
        and small enterprises with tailored solutions. From incorporation to
        compliance, we provide comprehensive assistance to help startups thrive.
      </p>
      <ul className="service-list">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default StartupSMEServices;
