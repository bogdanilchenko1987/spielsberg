import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">SPIELSBERG</h2>

        <ul className="footer-links">
          <li>
            <Link to="/style">Stil 2025</Link>
          </li>
          <li>
            <Link to="/gallery">Galerie</Link>
          </li>
          <li>
            <Link to="/sizes">Größen</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/privacy">Datenschutzrichtlinie</Link>
          </li>
          <li>
            <Link to="/terms">Geschäftsbedingungen</Link>
          </li>
        </ul>

        <p className="footer-email">support@spielsberg.com</p>

        <p className="footer-bottom">
          © 2025 spielsberg.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
