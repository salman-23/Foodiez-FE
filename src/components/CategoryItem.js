import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// Components

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
    </CategoryWrapper>
  );
};

export default CategoryItem;
