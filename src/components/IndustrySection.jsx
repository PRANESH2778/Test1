import React from "react";
import { FaBuilding, FaFileInvoiceDollar, FaUsers, FaShieldAlt } from "react-icons/fa"; // Import icons
import "./IndustrySection.css";

const IndustrySection = () => {
  return (
    <section className="industry-section">
      <h2>Industries We Audit</h2>
      <p>
        Our comprehensive auditing solutions cater to diverse industries, ensuring
        compliance, transparency, and financial accuracy.
      </p>
      <div className="industry-grid">
        <div className="industry-card">
          <FaBuilding size={60} color="#007BFF" /> {/* Corporate Icon */}
          <h3>Corporate</h3>
          <p>Ensuring regulatory compliance and transparency for corporations.</p>
        </div>
        <div className="industry-card">
          <FaFileInvoiceDollar size={60} color="#28A745" /> {/* Finance Icon */}
          <h3>Financial Institutions</h3>
          <p>Accurate financial reporting for banks and financial entities.</p>
        </div>
        <div className="industry-card">
          <FaUsers size={60} color="#FFC107" /> {/* Nonprofit Icon */}
          <h3>Nonprofit Organizations</h3>
          <p>Audit services to maintain donor trust and fiscal responsibility.</p>
        </div>
        <div className="industry-card">
          <FaShieldAlt size={60} color="#FF5722" /> {/* Government Icon */}
          <h3>Government</h3>
          <p>Promoting accountability and efficiency in public sector auditing.</p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;