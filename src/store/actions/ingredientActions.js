import { FETCH_INEGREDIENT, CREATE_INEGREDIENT } from "../actions/types";

import instance from "./instance";

export const fetchIngredient = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/ingredients");
      dispatch({
        type: FETCH_INEGREDIENT,
        payload: { ingredients: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createIngredient = (newIngredient) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      const res = await instance.post(
        `/categories/${newIngredient.categoryId}/ingredients`,
        formData
      );
      dispatch({
        type: CREATE_INEGREDIENT,
        payload: { newIngredient: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
