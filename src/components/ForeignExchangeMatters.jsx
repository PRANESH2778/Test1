import React from "react";
import "./ServicePage.css";

const ForeignExchangeMatters = () => {
  const details = [
    "Assistance in Foreign Exchange Transactions",
    "Compliance with FEMA Regulations",
    "Advisory on Inward and Outward Remittances",
    "Liaison with RBI and Authorized Dealers",
  ];

  return (
    <div className="service-page-container">
      <h1 className="service-title">Foreign Exchange Matters</h1>
      <p className="service-description">
        We provide comprehensive services to help businesses and individuals
        navigate the complexities of foreign exchange regulations and ensure
        compliance with FEMA guidelines.
      </p>
      <ul className="service-list">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ForeignExchangeMatters;
