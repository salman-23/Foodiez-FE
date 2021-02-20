import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Styling
import { RecipeWrapper } from "../styles";

const RecipeItem = (props) => {
  const recipe = props.recipe;

  return (
    <RecipeWrapper>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <Link to={`/recipes/${recipe.slug}`}>
        <img alt={recipe.name} src={recipe.image} />
      </Link>
      <p>{recipe.name}</p>
      <p>{recipe.description}</p>
    </RecipeWrapper>
  );
};

export default RecipeItem;
