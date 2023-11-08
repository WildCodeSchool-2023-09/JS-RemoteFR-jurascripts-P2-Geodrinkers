/* eslint-disable react/prop-types */
import "./styles/SingleCard.scss";

export default function SingleCard({ card }) {
  return (
    <section>
      <div className="card">
        <div>
          <img className="front" src={card.src} alt="card front" />
          <img
            className="back"
            src="./src/assets/img/logo-geo.png"
            alt="card back"
          />
        </div>
      </div>
    </section>
  );
}
