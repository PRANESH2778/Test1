import React from "react";
import "./ServicePage.css";

const GSTIndirectTaxes = () => {
  return (
    <div className="service-page-container">
      <h1 className="service-title">GST & Indirect Taxes</h1>
      <p className="service-description">
        We provide comprehensive GST and indirect tax services to ensure
        compliance and maximize input tax credits.
      </p>
      <ul className="service-list">
        <li>GST Registration & Compliance</li>
        <li>GST Returns Filing & Audits</li>
        <li>Advisory on Input Tax Credit (ITC)</li>
        <li>GST Health Check & Litigation Support</li>
      </ul>
    </div>
  );
};

export default GSTIndirectTaxes;
