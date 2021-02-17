import { useState } from "react";
import { SubmitButtonStyled, UpdateButtonStyled } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  updateCategory,
} from "../store/actions/categoryActions";
import { useHistory, useParams } from "react-router-dom";
// import AddButton from "./buttons/AddButton";

const CategoryForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { categorySlug, shopId } = useParams();

  const foundCategory = useSelector((state) =>
    state.categoryReducer.categories.find(
      (category) => category.slug === categorySlug
    )
  );

  const [category, setCategory] = useState(
    foundCategory
      ? foundCategory
      : {
          // shopId: shopId,
          name: "",
          description: "",
          image: "",
        }
  );

  const handleChnage = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setCategory({ ...category, image: event.target.files[0] });
  };

  const restForm = () => {
    setCategory({
      name: "",
      description: "",
      image: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (foundCategory) dispatch(updateCategory(category));
    // else
    dispatch(createCategory(category));
    restForm();
    history.push("/categories");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{foundCategory ? "Update" : "Create"} Category</h1>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={category.name}
            onChange={handleChnage}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={category.description}
            onChange={handleChnage}
          />
        </label>

        <label>
          Image:
          <input
            type="file"
            name="image"
            alt=""
            // value={category.image}
            onChange={handleImage}
          />
        </label>
        {/* <SubmitButtonStyled type="submit" value="Submit">
          Submit
        </SubmitButtonStyled> */}

        <UpdateButtonStyled type="submit">
          {foundCategory ? "Update" : "Create"} Category
        </UpdateButtonStyled>
      </form>
    </div>
  );
};

export default CategoryForm;
