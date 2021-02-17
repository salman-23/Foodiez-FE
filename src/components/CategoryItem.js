import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
// Styling
import { CategoryWrapper } from "../styles";

const CategoryItem = (props) => {
  const category = props.category;

  return (
    <CategoryWrapper>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <Link to={`/categories/${category.slug}`}>
        <img alt={category.name} src={category.image} />
      </Link>
      <p>{category.name}</p>
      <DeleteButton
        categoryId={category.id}
        deleteCategory={props.deleteCategory}
      />
      <UpdateButton categorySlug={category.slug}>Update</UpdateButton>
    </CategoryWrapper>
  );
};

export default CategoryItem;
