import PropTypes from "prop-types";
import Card from "./Card";

export default function CardList({ arr }) {
  return (
    <>
      {arr.map((item) => (
        <Card key={item.id} name={item.name} img={item.img} />
      ))}
    </>
  );
}
CardList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
