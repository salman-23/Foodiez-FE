import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
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
      <DeleteButton
        ingredientId={ingredient.id}
        deleteIngredient={props.deleteIngredient}
      />
      <UpdateButton ingredientSlug={ingredient.slug}>Update</UpdateButton>
    </IngredientWrapper>
  );
};

export default IngredientItem;
