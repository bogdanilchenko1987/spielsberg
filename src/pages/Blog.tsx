import React from "react";

const Blog: React.FC = () => {
  return (
    <section className="section">
      <br />
      <h2>Unser Blog</h2>
      <br />
      <p>
        Entdecken Sie spannende Einblicke in die Welt der Ringe und
        Schmuckdesigns.
      </p>

      <article style={{ marginTop: "2rem" }}>
        <h3>Verschiedene Arten von Eheringen</h3>
        <p>
          Die Wahl des perfekten Eherings ist sehr persönlich – und es gibt
          viele Stile zur Auswahl. Klassische Ringe aus Gelbgold stehen für
          zeitlose Eleganz, während Weißgold oder Platin moderne und edle
          Akzente setzen. Roségold ist besonders beliebt für romantische
          Designs.
        </p>
        <p>
          Wer Individualität sucht, greift zu Bicolor-Ringen oder zu Modellen
          mit Diamanten oder Gravuren. Auch minimalistische Eheringe ohne Steine
          sind im Trend – schlicht, stilvoll und aussagekräftig.
        </p>
      </article>

      <article style={{ marginTop: "3rem" }}>
        <h3>Schmucktrends 2025: Was ist angesagt?</h3>
        <p>
          Im Jahr 2025 liegt der Fokus auf Persönlichkeit und Ausdruck. Große,
          markante Ringe mit organischen Formen sind im Kommen – oft in
          Kombination mit farbigen Edelsteinen oder unregelmäßigen Oberflächen.
        </p>
        <p>
          Auch Layering bleibt aktuell: Mehrere feine Ringe werden kreativ
          kombiniert, gerne auch aus verschiedenen Metallen. Nachhaltigkeit ist
          ein großes Thema – immer mehr Menschen wählen fair produzierten
          Schmuck mit recyceltem Gold und conflict-free Diamanten.
        </p>
      </article>
    </section>
  );
};

export default Blog;
