import React from "react";
import { FaBuilding, FaLightbulb, FaUsers } from "react-icons/fa"; // Import relevant icons
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./SolutionsOffer.css";

const SolutionsOffer = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "CAPTIVE CENTER CREATION",
      description:
        "During the last decade, India has emerged as a preferred destination for global companies who want to outsource work to cut costs by way of establishing captive centers...",
      icon: <FaBuilding size={60} color="#28a745" />, // Green icon
    },
    {
      title: "FIRST GENERATION BUSINESSES ADVISORY",
      description:
        "In the current scenario, to turn one’s idea into a reality and to become a successful entrepreneur involves taking massive risks. So, a well-organized strategy is required...",
      icon: <FaLightbulb size={60} color="#ffc107" />, // Yellow icon
    },
    {
      title: "NEXT GENERATION FAMILY BUSINESSES ADVISORY",
      description:
        "In today’s competitive business environment, building a family business as a lasting institution stresses the need to explore opportunities and plan ahead for various challenges...",
      icon: <FaUsers size={60} color="#007bff" />, // Blue icon
    },
  ];

  return (
    <div className="solutionOffer-container">
      <h1 className="solutionPage-title">SOLUTIONS WE OFFER</h1>
      <p className="solutionOffer-subtitle">
        We offer a number of solutions to meet the needs of our clients such as captive centers, young entrepreneur services, and next-generation family businesses.
      </p>
      <div className="solutionOffer-grid">
        {solutions.map((solution, index) => (
          <div key={index} className="solutionOffer-card">
            <div className="solutionOffer-icon">{solution.icon}</div>
            <h3 className="solutionOffer-title">{solution.title}</h3>
            <p className="solutionOffer-description">{solution.description}</p>
          </div>
        ))}
      </div>
      <div className="know-more-container">
        <button
          className="know-more-button"
          onClick={() => navigate("/solutions")}
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default SolutionsOffer;
