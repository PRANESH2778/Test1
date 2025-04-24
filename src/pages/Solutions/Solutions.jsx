import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaLightbulb,
  FaUsers,
  FaBalanceScale,
  FaChartLine,
  FaIndustry
} from "react-icons/fa";
import "./Solutions.css";

const Solutions = () => {
  const navigate = useNavigate();
  const solutionsData = [
    {
          title: "Internal Audit & MIS Reporting",
          description:
            "We specialize in conducting comprehensive internal audits that go beyond compliance. Our audits help you identify operational inefficiencies, strengthen internal controls, and improve financial transparency.",
          icon: <FaBuilding size={60} color="#28a745" />, // Still fits well
        },
        {
          title: "Outsourced Accounting & Bookkeeping",
          description:
            "Free up your time and resources by outsourcing your financial operations to experts. Our team provides accurate, timely, and compliant accounting services that scale with your business.",
          icon: <FaLightbulb size={60} color="#ffc107" />, // Symbolic for smart solutions
        },
        {
          title: "Indirect Tax Advisory & Litigation Support",
          description:
            "Navigating the complex landscape of GST and other indirect taxes can be challenging. We assist businesses with advisory, compliance, and litigation support to reduce risks and ensure peace of mind.",
          icon: <FaBalanceScale size={60} color="#dc3545" />, // ⚖️ Represents law & tax
        },
        {
          title: "Data Analysis & Business Insights",
          description:
            "Turn raw data into strategic decisions. We help businesses track KPIs, spot trends, and optimize operations through advanced data analytics.",
          icon: <FaChartLine size={60} color="#17a2b8" />, // 📈 for data & insights
        },
        {
          title: "Industry-Specific Advisory & Compliance Solutions",
          description:
            "From manufacturing to services, we understand the unique challenges each industry faces. Our cross-sector experience allows us to deliver tailored solutions that fit your operational realities.",
          icon: <FaIndustry size={60} color="#6f42c1" />, // 🏭 for industry-specific work
        },
  ];

  return (
    <div className="solutions-page">
      <div className="solutions-hero">
        <h1>Our Solutions</h1>
        <p>
          We provide a wide range of solutions tailored to your business needs,
          ensuring growth and sustainability in a competitive environment.
        </p>
      </div>
      <div className="solutions-grid">
        {solutionsData.map((solution, index) => (
          <div key={index} className="solution-card"
          
          >
            <div className="solution-icon">{solution.icon}</div>
            {/* <img
              src={solution.image}
              alt={solution.title}
              className="solution-image"
            /> */}
            <h3 className="solution-title">{solution.title}</h3>
            <p className="solution-description">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
