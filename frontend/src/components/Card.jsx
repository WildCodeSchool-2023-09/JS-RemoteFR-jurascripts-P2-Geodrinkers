import PropTypes from "prop-types";

export default function Card({ name, img }) {
  return (
    <div className="card-ctn">
      <div className="title-ctn">
        <h2>{name}</h2>
      </div>
      <div className="img-ctn">
        <img src={img} alt="Map" />
      </div>
      <div className=""> </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
