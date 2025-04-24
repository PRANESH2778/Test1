import React from "react";
import "./ServicePage.css";

const BusinessAdvisory = () => {
  const details = [
    "Business Structuring & Restructuring",
    "Due Diligence",
    "Financial Modelling",
    "Cash Flow & Budgeting Advisory",
  ];

  return (
    <div className="service-page-container">
      <h1 className="service-title">Business Advisory</h1>
      <p className="service-description">
        Our Business Advisory services provide strategic solutions to help
        businesses achieve growth and operational excellence. We specialize in
        offering guidance for structural changes, financial improvements, and
        long-term sustainability.
      </p>
      <ul className="service-list">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessAdvisory;
