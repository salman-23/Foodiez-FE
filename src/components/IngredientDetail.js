import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Components
import AddButton from "./buttons/AddButton";

// Styling
import { DetailWrapper } from "../styles";
import CategoryList from "./CategoryList";

const IngredientDetail = () => {
  const ingredientSlug = useParams().ingredientSlug;
  console.log(ingredientSlug);
  const allProducts = useSelector((state) => state.categoryReducer.categories);

  const ingredient = useSelector((state) => {
    console.log(state);
    return state.ingredientReducer.ingrendients.find(
      (ingredient) => ingredient.slug === ingredientSlug
    );
  });
  console.log(ingredient);

  const categories = ingredient.categories.map((category) =>
    allProducts.find((_category) => _category.id === category.id)
  );

  if (!ingredient) return <Redirect to="/ingrendients" />;

  return (
    <>
      <DetailWrapper>
        <Helmet>
          <title>{ingredient.name}</title>
        </Helmet>
        <Link to="/ingredients">Back to Shops</Link>
        <h1>{ingredient.name}</h1>
        <img src={ingredient.image} alt={ingredient.name} />
      </DetailWrapper>
      <Link to={`/ingrendients/${ingredient.id}/categories/create`}>
        <AddButton>Add</AddButton>
      </Link>

      <CategoryList categories={categories} />
    </>
  );
};

export default IngredientDetail;
