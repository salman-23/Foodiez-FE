import { useState } from "react";
import { AddButtonStyled, UpdateButtonStyled } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import {
  createIngredient,
  updateIngredient,
} from "../store/actions/ingredientActions";
import { useHistory, useParams } from "react-router-dom";

const IngredientForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { ingredientSlug, categoryId } = useParams();

  const [ingredient, setIngredient] = useState({
    categoryId: categoryId,
    name: "",
    description: "",
    image: "",
  });

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

    dispatch(createIngredient(ingredient));
    restForm();
    history.push("/ingredients");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Ingredient</h1>
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
          <input type="file" name="image" alt="" onChange={handleImage} />
        </label>

        <AddButtonStyled type="submit">Submit Add Ingredient</AddButtonStyled>
      </form>
    </div>
  );
};

export default IngredientForm;
