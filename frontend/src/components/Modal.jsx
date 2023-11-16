import { useState } from "react";
import PropTypes from "prop-types";
import iconData from "../datas/dataGen";
import CocktailCard from "./CocktailCard";

export default function Modal({ selectIcon, onClose }) {
  const [isClosed, setIsClosed] = useState(false);
  const cocktailId =
    selectIcon && iconData.find((icon) => icon.name === selectIcon)?.cocktailID;

  const handleCloseClick = () => {
    setIsClosed(!isClosed);
    onClose();
  };
  return (
    <div>
      <CocktailCard
        cocktailId={cocktailId}
        onClose={handleCloseClick}
        isClosed={isClosed}
      />
    </div>
  );
}

Modal.propTypes = {
  selectIcon: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
