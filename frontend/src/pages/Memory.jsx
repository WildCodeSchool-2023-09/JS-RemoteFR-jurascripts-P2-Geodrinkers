import { useState } from "react";
import SingleCard from "../components/SingleCard";

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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  console.warn(turns, choiceTwo);

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

  const handleChoice = (card) => {
    if (choiceOne) {
      setChoiceTwo(card);
    } else {
      setChoiceOne(card);
    }
  };

  return (
    <section className="Memory">
      <button type="button" onClick={shuffleCards}>
        New Game
      </button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </section>
  );
}

export default Memory;
