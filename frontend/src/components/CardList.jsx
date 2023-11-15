import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function CardList({ CardDataHome }) {
  return (
    <div className="cardContainer">
      {CardDataHome.map((url) => (
        <Link to={url.url} className="card-map-link">
          <Card name={url.name} img={url.img} />
        </Link>
      ))}
    </div>
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
