import { useState } from "react";

const cardImages = [
  {
    src: "./src/assets/img/cocktailCard.png",
  },
  {
    src: "./src/assets/img/cocktailCard.png",
  },
  {
    src: "./src/assets/img/cocktailCard.png",
  },
  {
    src: "./src/assets/img/cocktailCard.png",
  },
  {
    src: "./src/assets/img/cocktailCard.png",
  },
];

function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));

    setCards(shuffledCards);
    setTurns(0);
  };
  console.warn(cards, turns);
  return (
    <section className="Memory">
      <button type="button" onClick={shuffleCards}>
        New Game
      </button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img
                className="back"
                src="./src/assets/img/logo-geo.png"
                alt="card back"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Memory;
