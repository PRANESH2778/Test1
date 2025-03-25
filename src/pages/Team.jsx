import React, { useState } from "react";
import "./Team.css";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "CA Avinash Gupta",
      title: "B.Com. (H), FCA, L.L.M.",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      shortDescription:
        "Avinash Gupta is a meritorious chartered accountant who graduated with honors in commerce...",
      fullDescription: `He is the fellow member of the Institute of Chartered Accountants
      of India. He did his graduation from Shri Ram College of Commerce,
      Delhi University and was awarded the best student of the college.
      He is also in the merit list of ICAI in CA Final. He is also Law
      Graduate and completed his LLM in International Taxation from Vienna
      University, Austria, Europe. He has authored 3 books on
      International Taxation and Transfer Pricing.
      
      He has delivered more than 1500 lectures at national and international
      levels. He is visiting faculty at ICAI and other prestigious
      institutions.`,
    },
    {
      id: 2,
      name: "CA Priya Sharma",
      title: "B.Com., ACA",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
      shortDescription:
        "Priya Sharma specializes in international taxation and corporate finance...",
      fullDescription: `Priya Sharma is a dynamic chartered accountant with expertise in
      international taxation and corporate finance. She has worked with
      numerous multinational corporations, providing consultancy on
      financial strategies and tax optimization.
      
      Her dedication and skills have earned her recognition as one of the
      most promising young accountants. She frequently conducts workshops
      and seminars for aspiring accountants.`,
    },
  ];

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="card-image">
              <img src={member.image} alt={member.name} />
              <div className="card-overlay">
                <p color="white">{member.shortDescription}</p>
                <span
                  onClick={() => handleOpenModal(member)}
                  className="read-more"
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="modal-image"
            />
            <h2>
              {selectedMember.name} ({selectedMember.title})
            </h2>
            <p>{selectedMember.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
