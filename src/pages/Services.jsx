import React, { useState } from "react";
import financialAdvisoryImage from "../assets/financial-advisory.jpg";
import "./Services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const services = [
    {
      title: "Direct Taxation",
      details: [
        "Income Tax Return Filing",
        "Tax Advisory & Planning",
        "Tax Audits",
        "Representation before Tax Authorities",
      ],
    },
    {
      title: "GST & Indirect Taxes",
      details: [
        "GST Registration & Compliance",
        "GST Returns Filing & Audits",
        "Advisory on Input Tax Credit (ITC)",
        "GST Health Check & Litigation Support",
      ],
    },
    {
      title: "Accounting & Bookkeeping",
      details: [
        "Outsourced Accounting",
        "Cloud Accounting Solutions (QuickBooks, Xero)",
        "Financial Statement Preparation",
        "MIS Reporting",
      ],
    },
    {
      title: "Audit & Assurance",
      details: [
        "Statutory Audits",
        "Internal Audits",
        "Forensic Audits",
        "Stock Audits",
      ],
    },
    {
      title: "Business Advisory",
      details: [
        "Business Structuring & Restructuring",
        "Due Diligence",
        "Financial Modelling",
        "Cash Flow & Budgeting Advisory",
      ],
    },
    {
      title: "Startup & SME Services",
      details: [
        "Startup Incorporation (Company, LLP, Proprietorship)",
        "Funding & Investor Relations Support",
        "Government Scheme Guidance (MSME, Startup India)",
        "Compliance Management",
      ],
    },
    {
      title: "International Taxation & FEMA",
      details: [
        "Cross Border Tax Advisory",
        "DTAA Advisory",
        "FEMA Compliances",
        "Foreign Subsidiary Setup & Compliances",
      ],
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        At Agrawal Bhaiya & Company, we offer a wide range of financial services
        tailored to meet the needs of businesses and individuals. Our team of
        experienced professionals is committed to providing reliable and
        comprehensive financial solutions.
      </p>

      {/* Accordion for Services */}
      <div className="accordion">
        {services.map((service, index) => (
          <div
            className={`accordion-item ${
              activeService === index ? "active" : ""
            }`}
            key={index}
          >
            <div
              className="accordion-title"
              onClick={() => toggleService(index)}
            >
              <h2>{service.title}</h2>
              <span>{activeService === index ? "-" : "+"}</span>
            </div>
            {activeService === index && (
              <ul className="accordion-content">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Image */}
      {/* <div className="image-container">
        <img
          src={financialAdvisoryImage}
          alt="Financial Advisory"
          className="services-image"
        />
      </div> */}
    </div>
  );
};

export default Services;