

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import ScrollLink from "./common/ScrollLink";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          SPIELSBERG
        </Link>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ScrollLink to="#hero" className="nav-link" onClick={closeMenu}>
            Startseite
          </ScrollLink>
          <ScrollLink to="#about" className="nav-link" onClick={closeMenu}>
            Sammlungen
          </ScrollLink>
          <ScrollLink
            to="#reviews-566"
            className="nav-link"
            onClick={closeMenu}
          >
            Rezensionen
          </ScrollLink>
          <ScrollLink to="#contact" className="nav-link" onClick={closeMenu}>
            Kontakt
          </ScrollLink>
        </nav>

        <button
          className="burger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div>
    </header>
  );
};

export default Header;
