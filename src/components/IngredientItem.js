import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Styling
import { IngredientWrapper, ulSt, liSt, ListWrapper } from "../styles";

const IngredientItem = (props) => {
  const ingredient = props.ingredient;

  return (
    <>
      <ListWrapper>
        <Helmet>
          <title>Ingredients</title>
        </Helmet>
        <p>{ingredient.name}</p>
        <Link to={`/ingredients/${ingredient.slug}`}>
          <img alt={ingredient.name} src={ingredient.image} />
        </Link>
        {/* <ul>
        <li>
          <Link to={`/ingredients/${ingredient.slug}`}>
            <img alt={ingredient.name} src={ingredient.image} />
          </Link>
        </li>
        <li>{ingredient.name}</li>
        <li>{ingredient.description}</li>
      </ul>  */}
        <p>{ingredient.description}</p>
      </ListWrapper>
    </>
  );
};

export default IngredientItem;
