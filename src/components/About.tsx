import React from "react";
import "../App.css";
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r4.jpg";

const cards = [
  {
    title: "Ewiger Glanz",
    subtitle: "Diamantring mit Signatur",
    description:
      "Mit Präzision gefertigt, symbolisiert dieses Stück zeitlose Liebe und Brillanz in jedem Detail.",
    image: r1,
  },
  {
    title: "Goldenes Flüstern",
    subtitle: "Handgefertigter Goldring",
    description:
      "Dezent und elegant – perfekt für den Alltag oder für die schönsten Momente des Lebens.",
    image: r2,
  },
  {
    title: "Himmlische Anmut",
    subtitle: "Weißgold mit Ausstrahlung",
    description:
      "Inspiriert von den Sternen – ein ausdrucksstarkes Design für alle, die mit Anmut und Stärke glänzen.",
    image: r3,
  },
  {
    title: "Moderne Liebe",
    subtitle: "Minimalistischer Platinring",
    description:
      "Für moderne Romantiker – klare Linien, elegante Form und zeitlose Schönheit.",
    image: r4,
  },
];

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">Warum Spielsberg?</h2>
      <div className="about-grid">
        {cards.map((card, index) => (
          <a href="#" className="about-card group" key={index}>
            <img src={card.image} alt={card.title} className="about-image" />
            <div className="about-card-content">
              <p className="about-subtitle">{card.subtitle}</p>
              <h3 className="about-heading">{card.title}</h3>
              <div className="about-hover">
                <p>{card.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
