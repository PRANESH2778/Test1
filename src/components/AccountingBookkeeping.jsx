import React from "react";
import "./ServicePage.css";

const AccountingBookkeeping = () => {
  return (
    <div className="service-page-container">
      <h1 className="service-title">Accounting & Bookkeeping</h1>
      <p className="service-description">
        We offer end-to-end accounting and bookkeeping services to help
        businesses maintain accurate financial records.
      </p>
      <ul className="service-list">
        <li>Outsourced Accounting</li>
        <li>Cloud Accounting Solutions (QuickBooks, Xero)</li>
        <li>Financial Statement Preparation</li>
        <li>MIS Reporting</li>
      </ul>
    </div>
  );
};

export default AccountingBookkeeping;
