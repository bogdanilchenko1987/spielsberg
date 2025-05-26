import React from "react";
import "../App.css";
import heroImg from "../assets/hero.jpg";
import ScrollLink from "./common/ScrollLink";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Zeitlose Eleganz</h1>
        <p className="hero-subtitle">
          Entdecken Sie handgefertigte Ringe und edlen Schmuck, der jeden
          begeistern wird Moment unvergesslich.
        </p>
        <ScrollLink to="#contact">
          <button className="hero-button">Erkunden</button>
        </ScrollLink>
      </div>

      <div className="hero-image-wrapper">
        <img src={heroImg} alt="Jewelry display" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
