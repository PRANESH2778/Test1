import React from "react";
import "./ServicePage.css";

const DirectTaxation = () => {
  const details = [
    "Income Tax Return Filing",
    "Tax Advisory & Planning",
    "Tax Audits",
    "Representation before Tax Authorities",
  ];

  return (
    <div className="service-page-container">
      <h1 className="service-title">Direct Taxation</h1>
      <p className="service-description">
        Our expertise in direct taxation helps businesses and individuals
        navigate complex tax laws efficiently. We provide solutions to ensure
        compliance and tax optimization.
      </p>
      <ul className="service-list">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default DirectTaxation;
