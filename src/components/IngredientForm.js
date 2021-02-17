import { useState } from "react";
import { SubmitButtonStyled, UpdateButtonStyled } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import {
  createIngredient,
  updateIngredient,
} from "../store/actions/ingredientActions";
import { useHistory, useParams } from "react-router-dom";
// import AddButton from "./buttons/AddButton";

const IngredientForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { ingredientSlug, categoryId } = useParams();

  const foundIngredient = useSelector((state) =>
    state.ingredientReducer.categories.find(
      (ingredient) => ingredient.slug === ingredientSlug
    )
  );

  const [ingredient, setIngredient] = useState(
    foundIngredient
      ? foundIngredient
      : {
          // categoryId: categoryId,
          name: "",
          description: "",
          image: "",
        }
  );

  const handleChnage = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setIngredient({ ...ingredient, image: event.target.files[0] });
  };

  const restForm = () => {
    setIngredient({
      name: "",
      description: "",
      image: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (foundIngredient) dispatch(updateIngredient(ingredient));
    // else
    dispatch(createIngredient(ingredient));
    restForm();
    history.push("/categories");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{foundIngredient ? "Update" : "Create"} Ingredient</h1>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={ingredient.name}
            onChange={handleChnage}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={ingredient.description}
            onChange={handleChnage}
          />
        </label>

        <label>
          Image:
          <input
            type="file"
            name="image"
            alt=""
            // value={ingredient.image}
            onChange={handleImage}
          />
        </label>
        {/* <SubmitButtonStyled type="submit" value="Submit">
          Submit
        </SubmitButtonStyled> */}

        <UpdateButtonStyled type="submit">
          {foundIngredient ? "Update" : "Create"} Ingredient
        </UpdateButtonStyled>
      </form>
    </div>
  );
};

export default IngredientForm;
