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
import { createCategory } from "../store/actions/categoryActions";
import { useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const CategoryForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { categorySlug, ingredientId } = useParams();

  const [category, setCategory] = useState({
    // ingredientId: ingredientId,
    name: "",
    description: "",
    image: "",
  });

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

    dispatch(createCategory(category));
    restForm();
    history.push("/categories");
  };

  return (
    <>
      <Helmet>
        <title>Create a Category</title>
      </Helmet>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <FieldSetStyled>
            <LegendStyled>
              <h2>Create Category</h2>
              <LabelStyled>
                Name:
                <InputFieldStyled
                  type="text"
                  name="name"
                  value={category.name}
                  onChange={handleChnage}
                />
              </LabelStyled>
              <LabelStyled>
                Description:
                <InputFieldStyled
                  type="text"
                  name="description"
                  value={category.description}
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
                Create Category
              </FormAddButtonStyled>
            </LegendStyled>
          </FieldSetStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default CategoryForm;
