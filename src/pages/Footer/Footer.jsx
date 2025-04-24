import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="section">
          <h3 className="footer-title">Agrawal Bhaiya & Company</h3>
          <p>Your trusted partner in accounting, taxation, and financial advisory.</p>
        </div>

        {/* Quick Links */}
        <div className="section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="links">
            <li><a href="/" className="link">Home</a></li>
            <li><a href="/solutions" className="link">Solutions</a></li>
            <li><a href="/services" className="link">Services</a></li>
            <li><a href="/blogs" className="link">Blogs</a></li>
            <li><a href="/team" className="link">Team</a></li>
            <li><a href="/contactus" className="link">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="section">
          <h3 className="footer-title">Contact Us</h3>
          <p>📍 Address: 316 Homeland City, Opp. Reliance Foundation School, Udhana Magdalla Road, Surat, Gujarat (395007)</p>
          <p>📞 Phone: 0261-4531968</p>
          <p>📧 Email: abandco.surat@gmail.com</p>
          <p>💬 WhatsApp: <a href="https://wa.me/919586737879" target="_blank" rel="noopener noreferrer">+91-95867-37879</a></p>
          <p>💬 WhatsApp: <a href="https://wa.me/918012139016" target="_blank" rel="noopener noreferrer">+91-80121- 39016</a></p>
        </div>
      </div>

      {/* Social Media */}
      <div className="socialMedia">
        <a href="https://facebook.com" className="icon">🌐</a>
        <a href="https://twitter.com" className="icon">🐦</a>
        <a href="https://linkedin.com" className="icon">🔗</a>
      </div>

      {/* Copyright */}
      <div className="copyRight">
        <p>© {new Date().getFullYear()} Agrawal Bhaiya & Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
