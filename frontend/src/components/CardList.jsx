import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function CardList({ CardDataHome }) {
  const firstCard = CardDataHome[0];
  const secondCard = CardDataHome[1];
  return (
    <>
      <Link to="/map" className="card-map-link">
        <Card name={firstCard.name} img={firstCard.img} />
      </Link>
      <Link to="/memory" className="card-map-link">
        <Card name={secondCard.name} img={secondCard.img} />
      </Link>
    </>
  );
}

CardList.propTypes = {
  CardDataHome: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
