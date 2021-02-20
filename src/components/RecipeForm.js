import { useState } from "react";
import {
  AddButtonStyled,
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../store/actions/recipeActions";
import { useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const RecipeForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { recipeSlug, ingredientId } = useParams();

  const [recipe, setRecipe] = useState({
    ingredientId: ingredientId,
    name: "",
    description: "",
    image: "",
  });

  const handleChnage = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };

  const restForm = () => {
    setRecipe({
      name: "",
      description: "",
      image: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createRecipe(recipe));
    restForm();
    history.push("/recipes");
  };

  return (
    <>
      <Helmet>
        <title>Create an Recipe</title>
      </Helmet>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <FieldSetStyled>
            <LegendStyled>
              <h2>Create Recipe</h2>
              <LabelStyled>
                Name:
                <InputFieldStyled
                  type="text"
                  name="name"
                  value={recipe.name}
                  onChange={handleChnage}
                />
              </LabelStyled>
              <LabelStyled>
                Description:
                <InputFieldStyled
                  type="text"
                  name="description"
                  value={recipe.description}
                  onChange={handleChnage}
                />
              </LabelStyled>

              <LabelStyled>
                Image:
                <InputFieldStyled
                  type="file"
                  name="image"
                  alt=""
                  onChange={handleImage}
                />
              </LabelStyled>

              <FormAddButtonStyled onSubmit={handleSubmit}>
                Submit Add Recipe
              </FormAddButtonStyled>
            </LegendStyled>
          </FieldSetStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default RecipeForm;
