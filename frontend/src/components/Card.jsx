import PropTypes from "prop-types";

export default function Card({ name, img }) {
  return (
    <div className="card-ctn">
      <h2 className="title-ctn">{name}</h2>

      <img src={img} alt="Map" className="img-ctn" />
      <div className="" />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
