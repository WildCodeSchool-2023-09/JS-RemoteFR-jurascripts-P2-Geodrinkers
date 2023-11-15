import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "../components/SingleCard";
import "../components/styles/Memory.scss";
import Navbar from "../components/Navbar";

function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const fetchData = async () => {
    try {
      const responses = await Promise.all(
        Array.from({ length: 6 }, () =>
          axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        )
      );

      const apiImages = responses.map((response) => response.data.drinks[0]);

      const cardImages = apiImages.flatMap((drink) => [
        { src: drink.strDrinkThumb, matched: false },
        { src: drink.strDrinkThumb, matched: false },
      ]);

      const shuffledCards = cardImages
        .sort(() => Math.random() - 0.5)
        .map((card, index) => ({
          ...card,
          id: index,
        }));

      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
      setDisabled(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChoice = (card) => {
    if (choiceOne && choiceTwo) {
      return;
    }

    if (!choiceOne) {
      setChoiceOne(card);
    } else if (choiceOne.id !== card.id) {
      setChoiceTwo(card);
      setDisabled(true);
    }
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <>
      <Navbar />
      <section className="Memory">
        <div className="Memory-ctn">
          <button type="button" onClick={fetchData}>
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
