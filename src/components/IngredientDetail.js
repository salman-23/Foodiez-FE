import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Components
import AddButton from "./buttons/AddButton";
// import CategoryList from "./CategoryList";

// Styling
import { DetailWrapper } from "../styles";

const IngredientDetail = () => {
  const ingredientSlug = useParams().ingredientSlug;

  const ingredient = useSelector((state) =>
    state.ingredientReducer.ingredients.find(
      (ingredient) => ingredient.slug === ingredientSlug
    )
  );
  if (!ingredient) return <Redirect to="/ingredient" />;

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


      {/* <CategoryList categories={categories} /> */}
    </>
  );
};

export default IngredientDetail;
