import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function CocktailCard({ cocktailId, onClose, isClosed }) {
  const [cocktailData, setCocktailData] = useState(null);

  useEffect(() => {
    const fetchCocktailData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
        );
        setCocktailData(response.data.drinks[0]);
      } catch (error) {
        console.error("Error fetchong data:", error);
      }
    };

    fetchCocktailData();
  }, [cocktailId]);

  const renderIngredients = () => {
    const ingredients = [];

    for (let i = 0; i <= 15; i += 1) {
      const ing = cocktailData?.[`strIngredient${i}`];
      const measure = cocktailData?.[`strMeasure${i}`];

      if (ing && measure) {
        ingredients.push(
          <li key={i}>
            {ing} - {measure}
          </li>
        );
      } else if (ing) {
        ingredients.push(<li key={i}>{ing}</li>);
      }
    }

    return ingredients;
  };

  return (
    <div className={`card-map ${isClosed ? "card-map closed" : "card-map"}`}>
      <div className="svg-ctn">
        <svg
          onClick={onClose}
          width="24px"
          height="24px"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="84" stroke="#fce419" strokeWidth="18" />
          <path
            d="M142.89 72.1208L115.015 99.9994L142.89 127.877C147.037 132.025 147.037 138.744 142.89 142.892C140.819 144.963 138.102 146 135.388 146C132.668 146 129.952 144.965 127.882 142.892L100 115.011L72.1207 142.891C70.0493 144.963 67.3328 146 64.6156 146C61.8992 146 59.1846 144.965 57.1113 142.891C52.965 138.745 52.965 132.026 57.1113 127.876L84.986 99.9991L57.1098 72.1208C52.9634 67.9745 52.9634 61.2538 57.1098 57.1074C61.2553 52.9642 67.972 52.9642 72.1191 57.1074L99.9999 84.9859L127.878 57.1074C132.026 52.9642 138.744 52.9642 142.889 57.1074C147.037 61.2538 147.037 67.9745 142.89 72.1208Z"
            fill="#fce419"
          />
        </svg>
      </div>

      <div className="img-ctn">
        {cocktailData && (
          <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} />
        )}
      </div>
      <h1 className="title">{cocktailData?.strDrink}</h1>
      <div className="ingredients">
        <h2>Ingrédients:</h2>
        <ul>{renderIngredients()}</ul>
      </div>
    </div>
  );
}

CocktailCard.propTypes = {
  cocktailId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isClosed: PropTypes.bool.isRequired,
};
