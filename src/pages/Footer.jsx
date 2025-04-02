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
            <li><a href="/services" className="link">Services</a></li>
            <li><a href="/aboutus" className="link">About Us</a></li>
            <li><a href="/contactus" className="link">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="section">
          <h3 className="footer-title">Contact Us</h3>
          <p>📍 Address: 123 Financial Street, Chennai, India</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📧 Email: info@agrawalcompany.com</p>
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
