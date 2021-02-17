import { deleteCategory } from "../../store/actions/categoryActions";
import { useDispatch } from "react-redux";
// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled
      onClick={() => dispatch(deleteCategory(props.categoryId))}
    >
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
