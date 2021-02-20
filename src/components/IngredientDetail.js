import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import RecipeList from "../components/RecipeList";

// Components

// Styling
import { DetailWrapper } from "../styles";

const IngredientDetail = () => {
  const { ingredientSlug } = useParams();

  const allRecipes = useSelector((state) => state.recipeReducer.recipes);

  const ingredient = useSelector((state) =>
    state.ingredientReducer.ingredients.find(
      (_ingredient) => _ingredient.slug === ingredientSlug
    )
  );

  const recipes = ingredient.recipes.map((recipe) =>
    allRecipes.find((_recipe) => _recipe.id === recipe.id)
  );

  if (!ingredient) return <Redirect to="/ingredients" />;

  return (
    <>
      <DetailWrapper>
        <Helmet>
          <title>{ingredient.name}</title>
        </Helmet>
        <Link to="/ingredients">Back to Ingredients</Link>
        <h1>{ingredient.name}</h1>
        <img src={ingredient.image} alt={ingredient.name} />
      </DetailWrapper>
    </>
  );
};

export default IngredientDetail;
