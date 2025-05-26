import React from "react";
import styles from "./Gallery.module.css";
import a1 from "../assets/icons/a1.jpg";
import a2 from "../assets/icons/a2.jpg";
import a3 from "../assets/icons/a3.jpg";
import a4 from "../assets/icons/a4.jpg";

const prizes = [
  {
    src: a1,
    alt: "Goldener Ehering",
  },
  {
    src: a2,
    alt: "Diamant-Ehering",
  },
  {
    src: a4,
    alt: "Ehering 2024",
  },

  {
    src: a3,
    alt: "Ehering 2025",
  },
];

const Gallery: React.FC = () => {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>Galerie der Eheringe</h2>
      <div className={styles.grid}>
        {prizes.map(({ src, alt }) => (
          <div key={alt} className={styles.card}>
            <img loading="lazy" src={src} alt={alt} className={styles.image} />
            <p className={styles.caption}>{alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
