/* eslint-disable react/prop-types */
import "./styles/SingleCard.scss";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="./src/assets/img/cover.png"
          onClick={handleClick}
          aria-hidden="true"
          alt="card back"
        />
      </div>
    </div>
  );
}
