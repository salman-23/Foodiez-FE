import { ListWrapper, Title } from "../styles";
import RecipeItem from "./RecipeItem";

import { Link } from "react-router-dom";

import { AddButtonStyled } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";

// const RecipeList = ({ recipes }) => {
const RecipeList = () => {
  const [query, setQuery] = useState("");
  const recipes = useSelector((state) => state.recipeReducer.recipes);

  // console.log(recipes);

  const recipeList = recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />);

  return (
    <div>
      <Title>Recipes</Title>
      <SearchBar setQuery={setQuery} />
      <Link to="/recipes/create">
        <AddButtonStyled>Create Recipe</AddButtonStyled>
      </Link>

      <ListWrapper>{recipeList}</ListWrapper>
    </div>
  );
};

export default RecipeList;
