import React from "react";
import { FaBuilding, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa"; // Import relevant icons
import "./Solutions.css";

const Solutions = () => {
  const solutionsData = [
    {
      title: "Captive Center Creation",
      description:
        "India has become a prime location for global companies establishing captive centers. We guide organizations in setting up and managing these centers effectively.",
      icon: <FaBuilding size={60} color="#1e3a8a" />,
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "First-Generation Business Advisory",
      description:
        "Turning ideas into reality as an entrepreneur requires strategic planning. Our advisory services help you tackle risks and build successful ventures.",
      icon: <FaLightbulb size={60} color="#facc15" />,
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Next-Generation Family Business Advisory",
      description:
        "Family businesses face unique challenges. We assist in navigating opportunities and creating lasting institutions for the next generation.",
      icon: <FaUsers size={60} color="#28a745" />,
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Startup Strategy",
      description:
        "From ideation to execution, we provide strategic advice to startups and SMEs to help them achieve sustainable growth.",
      icon: <FaRocket size={60} color="#ff5733" />,
      image: "https://via.placeholder.com/300x200",
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
          <div key={index} className="solution-card">
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
