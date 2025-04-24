import React from "react";
import "./ServicePage.css";

const AuditAssurance = () => {
  return (
    <div className="service-page-container">
      <h1 className="service-title">Audit & Assurance</h1>
      <p className="service-description">
        We conduct various types of audits to ensure your business complies
        with statutory and internal requirements.
      </p>
      <ul className="service-list">
        <li>Statutory Audits</li>
        <li>Internal Audits</li>
        <li>Forensic Audits</li>
        <li>Stock Audits</li>
      </ul>
    </div>
  );
};

export default AuditAssurance;
