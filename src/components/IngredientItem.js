import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Styling
import { IngredientWrapper } from "../styles";

const IngredientItem = (props) => {
  const ingredient = props.ingredient;

  return (
    <IngredientWrapper>
      <Helmet>
        <title>Ingredients</title>
      </Helmet>
      <Link to={`/ingredients/${ingredient.slug}`}>
        <img alt={ingredient.name} src={ingredient.image} />
      </Link>
      <p>{ingredient.name}</p>
      {/* <p>{ingredient.description}</p> */}
    </IngredientWrapper>
  );
};

export default IngredientItem;
