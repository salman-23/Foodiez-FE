import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { DetailWrapper, AddButtonStyled } from "../styles";
import IngredientList from "./IngredientList";

const CategoryDetail = () => {
  const { categorySlug } = useParams();

  const allIngredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  const category = useSelector((state) =>
    state.categoryReducer.categories.find(
      (_category) => _category.slug === categorySlug
    )
  );

  if (!category) return <Redirect to="/categories" />;

  const ingredients = category.ingredients.map((ingredient) =>
    allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  );

  return (
    <>
      <DetailWrapper>
        <Helmet>
          <title>{category.name}</title>
        </Helmet>
        <Link to="/categories">Back to Categories</Link>
        <h1>{category.name}</h1>
        <img src={category.image} alt={category.name} />
        <p>{category.description}</p>
        <IngredientList ingredients={ingredients} />

        <Link to={`/categories/${category.id}/ingredients/create`}>
          <AddButtonStyled>Add ingredient</AddButtonStyled>
        </Link>
      </DetailWrapper>
    </>
  );
};

export default CategoryDetail;
