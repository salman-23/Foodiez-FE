import { ListWrapper, Title } from "../styles";
import IngredientItem from "./IngredientItem";
import AddButton from "./buttons/AddButton";

import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
// import Loading from "./Loading";

const IngredientList = () => {
  const ingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  const [query, setQuery] = useState("");

  const ingredientList = ingredients
    .filter((ingredient) => ingredient.name.toLowerCase().includes(query))
    .map((ingredient) => (
      <IngredientItem key={ingredient.id} ingredient={ingredient} />
    ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Title>Ingredients</Title>
      {ingredientList}
    </div>
  );
};

export default IngredientList;
