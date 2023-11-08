/* eslint-disable react/prop-types */
import "./styles/SingleCard.scss";

export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div>
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card front" />
          <img
            className="back"
            src="./src/assets/img/logo-geo.png"
            onClick={handleClick}
            aria-hidden="true"
            alt="card back"
          />
        </div>
      </div>
    </div>
  );
}
