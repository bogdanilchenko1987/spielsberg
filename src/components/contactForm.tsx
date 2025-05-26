import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import Modal from "./modal/Modal";

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    formRef.current?.reset();
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section id="contact" className="Contactsection">
      <div className="Contactcontainer">
        <h2 className="Contacttitle">Kontaktieren Sie uns</h2>
        <p className="Contactsubtitle">
          Haben Sie eine Frage? Kontaktieren Sie uns.
        </p>

        <form className="Contactform" onSubmit={handleSubmit} ref={formRef}>
          <div className="ContactformGroup">
            <label htmlFor="email" className="Contactlabel">
              Ihre E-Mail
            </label>
            <input
              type="email"
              id="email"
              required
              className="Contactinput"
              placeholder="name@example.com"
            />
          </div>

          <div className="ContactformGroup">
            <label htmlFor="message" className="label">
              Thema
            </label>
            <textarea
              id="message"
              required
              rows={6}
              className="Contacttextarea"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button type="submit" className="hero-button">
            Nachricht senden
          </button>
        </form>
        {isSubmitted && (
          <Modal message="Danke, wir rufen Sie zurück" onClose={closeModal} />
        )}
      </div>
    </section>
  );
};

export default ContactForm;
