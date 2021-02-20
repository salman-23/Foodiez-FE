import { ListWrapper, Title } from "../styles";
import IngredientItem from "./IngredientItem";
import { useParams, Link } from "react-router-dom";
import { AddButtonStyled } from "../styles";
import { Helmet } from "react-helmet";

import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

// import Loading from "./Loading";

const IngredientList = ({ categoryId }) => {
  const [query, setQuery] = useState("");
  // const loading = useSelector((state) => state.ingredients.loading);
  // if (loading) return <Loading />;

  const ingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  const ingredientList = ingredients
    .filter((ingredient) => ingredient.categoryId === categoryId)
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem ingredient={ingredient} key={ingredient.id} />
    ));

  return (
    <div>
      <Link to={`/categories/${categoryId}/ingredients/create`}>
        <AddButtonStyled>Add ingredient</AddButtonStyled>
      </Link>
      <Title>Ingredients</Title>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{ingredientList}</ListWrapper>
    </div>
  );
};

export default IngredientList;
