import PropTypes from "prop-types";
import iconData from "../datas/dataGen";
import CocktailCard from "./CocktailCard";

export default function Modal({ selectIcon, onClose }) {
  const cocktailId =
    selectIcon && iconData.find((icon) => icon.name === selectIcon)?.cocktailID;

  return (
    <div>
      <CocktailCard cocktailId={cocktailId} onClose={onClose} />
    </div>
  );
}

Modal.propTypes = {
  selectIcon: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
