import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
import "../components/styles/Memory.scss";
import Navbar from "../components/Navbar";

const cardImages = [
  {
    src: "./img/green.jpg",
    matched: false,
  },
  {
    src: "./img/orange.jpg",
    matched: false,
  },
  {
    src: "./img/spritz.jpg",
    matched: false,
  },
  {
    src: "./img/white.jpg",
    matched: false,
  },
  {
    src: "./img/yellow.jpg",
    matched: false,
  },
  {
    src: "./img/blue.jpg",
    matched: false,
  },
];

function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));

    setChoiceOne(null);
    setChoiceTwo(null);
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
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((preveCards) => {
          return preveCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <Navbar />
      <section className="Memory">
        <div className="Memory-ctn">
          <button type="button" onClick={shuffleCards}>
            New Game
          </button>
          <div className="card-grid">
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
          <div className="turn-ctn">
            <p>Turns: {turns}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Memory;
