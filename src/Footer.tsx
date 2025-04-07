import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/services">Our Services</a>
        <a href="/contact">Contact</a>
        <a href="/policy">Privacy Policy</a>
        <a href="/termsandconditions">Terms and Conditions</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Neuviq Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;