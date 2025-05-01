import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            d="M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,69.3C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"
            fill="#1f2b3d"
          />
        </svg>
      </div>

      <div className="footer-content">
        {/* Company Info */}
        <div className="section">
          <h3 className="footer-title">Agrawal Bhaiya & Company</h3>
          <p>Your trusted partner in accounting, taxation, and financial advisory.</p>
        </div>

        {/* Quick Links */}
        <div className="section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="section">
          <h3 className="footer-title">Contact Us</h3>
          <p>📍 316 Homeland City, Opp. Reliance Foundation School, Surat</p>
          <p>📞 0261-4531968</p>
          <p>📧 abandco.surat@gmail.com</p>
          <p className="fab fa-whatsapp"> <a href="https://wa.me/919586737879" target="_blank" rel="noopener noreferrer" >+91-95867-37879</a></p><br></br>
          <p className="fab fa-whatsapp"> <a href="https://wa.me/918012139016" target="_blank" rel="noopener noreferrer">+91-80121-39016</a></p>
        </div>
      </div>

      {/* Socials */}
      <div className="socialMedia">
        <a href="https://facebook.com" className="icon">🌐</a>
        <a href="https://twitter.com" className="icon">🐦</a>
        <a href="https://linkedin.com" className="icon">🔗</a>
      </div>

      <div className="copyRight">
        <p>© {new Date().getFullYear()} Agrawal Bhaiya & Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
