import { ListWrapper, Title } from "../styles";
import IngredientItem from "./IngredientItem";
import { Helmet } from "react-helmet";

import SearchBar from "./SearchBar";
import { useState } from "react";

const IngredientList = ({ ingredients }) => {
  const [query, setQuery] = useState("");
  // console.log(ingredients);
  const ingredientList = ingredients
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem ingredient={ingredient} key={ingredient.id} />
    ));
  return (
    <div>
      <Title>Ingredients</Title>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{ingredientList}</ListWrapper>
    </div>
  );
};

export default IngredientList;
