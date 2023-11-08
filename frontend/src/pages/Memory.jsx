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
    </section>
  );
}

export default Memory;
