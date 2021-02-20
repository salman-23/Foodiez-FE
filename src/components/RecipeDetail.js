import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Components
// import IngredientList from "../components/IngredientList";
// Styling
import { DetailWrapper, AddButtonStyled } from "../styles";

const RecipeDetail = () => {
  const { recipeSlug } = useParams();

  const allIngredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  if (!recipe) return <Redirect to="/recipes" />;

  const recipe = useSelector((state) =>
    state.recipeReducer.recipes.find((recipe) => recipe.slug === recipeSlug)
  );

  const ingredients = recipe.ingredients.map((_ingredient) =>
    allIngredients.find((_ingredient) => (_ingredient.id = ingredient.id))
  );

  return (
    <>
      <DetailWrapper>
        <Helmet>
          <title>{recipe.name}</title>
        </Helmet>
        <Link to="/recipes">Back to Recipes</Link>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} />
        {/* <IngredientList ingredients={ingredients} /> */}
        {/* <Link to="/recipes/create">
          <AddButtonStyled>Add Recipe</AddButtonStyled>
        </Link> */}
      </DetailWrapper>
    </>
  );
};

export default RecipeDetail;
