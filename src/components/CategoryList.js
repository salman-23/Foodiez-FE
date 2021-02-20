import { ListWrapper, Title } from "../styles";
import CategoryItem from "./CategoryItem";

import { Link } from "react-router-dom";

import { AddButtonStyled } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
// import { useSelector } from "react-redux";
// import Loading from "./Loading";

const CategoryList = ({ categories }) => {
  const [query, setQuery] = useState("");

  // const loading = useSelector((state) => state.ingredientReducer.loading);

  // if (loading) return <Loading />;

  const categoryList = categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);
  return (
    <div>
      <Title>Categories</Title>
      <SearchBar setQuery={setQuery} />
      <Link to="/categories/create">
        <AddButtonStyled>Create Category</AddButtonStyled>
      </Link>
      <ListWrapper>{categoryList}</ListWrapper>
    </div>
  );
};

export default CategoryList;
