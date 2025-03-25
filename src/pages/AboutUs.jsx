import React, { useEffect } from 'react';
// import teamImage from '../assets/team.jpg';
import { FaUsers, FaBullhorn, FaShieldAlt, FaChartLine, FaRegHandshake } from 'react-icons/fa'; // Importing icons
import './AboutUs.css'; // Create a separate CSS file for styling


const AboutUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <div className="aboutcontainer">
      <h1 className="fade-in">About Agrawal Bhaiya & Company</h1>
      <p className="fade-in">
        We are a Surat-based Chartered Accountant firm founded by three
        experienced professionals driven by a shared vision – to provide
        comprehensive, reliable, and innovative financial solutions to our
        clients.
      </p>
      <p className="fade-in">
        With a strong foundation in core financial practices and an adaptable
        approach to modern business challenges, we serve businesses across
        industries, helping them stay compliant and competitive in today’s
        fast-paced economy.
      </p>

      {/* Mission Section */}
      <section className="missionSection fade-in">
        <h2>
          <FaBullhorn /> Our Mission
        </h2>
        <p>
          Our mission is to empower businesses with comprehensive financial
          solutions that help them thrive in a complex and dynamic financial
          landscape. We aim to provide proactive, innovative, and customized
          services that exceed our clients' expectations, ensuring their
          long-term success.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="chooseUsSection fade-in">
        <h2>
          <FaShieldAlt /> Why Choose Us?
        </h2>
        <ul className="bulletList">
          <li>
            <FaUsers className="icon" /> Combined Expertise of Three Partners
          </li>
          <li>
            <FaChartLine className="icon" /> Client-Centric Approach
          </li>
          <li>
            <FaBullhorn className="icon" /> Technology-Driven Financial Solutions
          </li>
          <li>
            <FaShieldAlt className="icon" /> Commitment to Ethical Practices
          </li>
          <li>
            <FaRegHandshake className="icon" /> Tailored Services for Diverse Sectors
          </li>
        </ul>
      </section>

      {/* Meet Our Partners Section */}
      <section className="meetPartnersSection fade-in">
        <h2>
          <FaUsers /> Meet Our Partners
        </h2>
        <div className="partners-cards">
          <div className="partner-card">
            <h3>CA Niraj Kumar Bhaiya</h3>
            <p>Partner | Bank Audits & Tech-Driven Financial Insights</p>
            <p>
              With over 4 years of professional experience, CA Niraj Kumar
              Bhaiya brings a unique blend of traditional audit expertise
              combined with a technology-first approach to financial reporting
              and data analysis.
            </p>
          </div>

          <div className="partner-card">
            <h3>CA Ajay Satyanarayan Agrawal</h3>
            <p>Partner | Internal Audit & Litigation Expert</p>
            <p>
              CA Ajay specializes in internal audits across diverse industries,
              focusing on identifying operational inefficiencies, financial
              loopholes, and areas for improvement.
            </p>
          </div>

          <div className="partner-card">
            <h3>CA Vijay Satyanarayan Agrawal</h3>
            <p>Senior Partner | Financial Reporting & Valuation Expert</p>
            <p>
              With over 6 years of rich experience in financial reporting, MIS
              reporting, and startup valuation, CA Vijay plays a crucial role in
              assisting startups with fundraising through angel investors and
              venture capitalists.
            </p>
          </div>
        </div>
      </section>

      {/* Team Image */}
      {/* <img src={teamImage} alt="Our Team" className="teamImage fade-in" /> */}
    </div>
  );
};

export default AboutUs;
