import { useState } from "react";
import {
  AddButtonStyled,
  UpdateButtonStyled,
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { createIngredient } from "../store/actions/ingredientActions";
import { useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const IngredientForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { categoryId } = useParams();

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
    history.push("/categories");
  };

  return (
    <>
      <Helmet>
        <title>Create an Ingredient</title>
      </Helmet>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <FieldSetStyled>
            <LegendStyled>
              <h2>Create Ingredient</h2>
              <LabelStyled>
                Name:
                <InputFieldStyled
                  type="text"
                  name="name"
                  value={ingredient.name}
                  onChange={handleChnage}
                />
              </LabelStyled>
              <LabelStyled>
                Description:
                <InputFieldStyled
                  type="text"
                  name="description"
                  value={ingredient.description}
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
              {/* onSubmit={handleSubmit}  was type sumbit*/}
              {/* <FormAddButtonStyled onSubmit={handleSubmit}>
                Submit Add Ingredient
              </FormAddButtonStyled> */}
              <FormAddButtonStyled onSubmit={handleSubmit}>
                Submit Add Ingredient
              </FormAddButtonStyled>
            </LegendStyled>
          </FieldSetStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default IngredientForm;
