import { UpdateButtonStyled } from "../../styles";
import { Link } from "react-router-dom";

const UpdateButton = ({ categorySlug }) => {
  return (
    <div>
      <Link to={`/categories/${categorySlug}/edit`}>
        <UpdateButtonStyled>Edit</UpdateButtonStyled>
      </Link>
    </div>
  );
};

export default UpdateButton;
