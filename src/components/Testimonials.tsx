import React from "react";
import "../App.css";
import i1 from "../assets/icons/bonnie-green.jpg";
import i2 from "../assets/icons/sofia-mcguire.jpg";
import star from "../assets/stars3.svg";

const Testimonials: React.FC = () => {
  return (
    <section id="reviews-566">
      <div className="cs-container">
        <div className="cs-content">
          <h2 className="cs-title">Was unsere Kunden sagen</h2>
        </div>

        <ul className="cs-card-group">
          <li className="cs-item">
            <img
              className="cs-stars"
              src={star}
              alt="5 star rating"
              width="189"
              height="24"
            />
            <p className="cs-item-text">
              Ich bin absolut begeistert von meinem neuen Ehering von
              Spielsberg. Das Design ist zeitlos elegant und die Qualität
              übertrifft meine Erwartungen. Ich bekomme ständig Komplimente
              dafür!
            </p>
            <div className="cs-flex-group">
              <div className="cs-profile">
                <img src={i1} alt="Vita Norris" />
              </div>
              <div>
                <span className="cs-name">Vita Norris</span>
              </div>
            </div>
          </li>

          <li className="cs-item">
            <img
              className="cs-stars"
              src={star}
              alt="5 star rating"
              width="189"
              height="24"
            />
            <p className="cs-item-text">
              Die Schmuckstücke sind nicht nur wunderschön, sondern fühlen sich
              auch sehr hochwertig an. Der Kundenservice war freundlich und
              hilfsbereit – alles lief reibungslos. Ich werde definitiv wieder
              bei Spielsberg bestellen.
            </p>
            <div className="cs-flex-group">
              <div className="cs-profile">
                <img src={i2} alt="Eva Tommas" />
              </div>
              <div>
                <span className="cs-name">Eva Tommas</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
