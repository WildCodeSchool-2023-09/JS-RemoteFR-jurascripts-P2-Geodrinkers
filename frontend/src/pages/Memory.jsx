import { useEffect, useState } from "react";
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

  console.warn(turns);

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
      return setChoiceTwo(card);
    }
    return setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

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
