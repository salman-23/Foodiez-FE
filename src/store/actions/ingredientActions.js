import {
  FETCH_INEGREDIENT,
  CREATE_INEGREDIENT,
  // UPDATE_INEGREDIENT,
  // DELETE_INEGREDIENT,
  
} from "../actions/types";

import instance from "./instance";
import axios from "axios";

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

// export const createIngredient = (newIngredient) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         `http://localhost:8001/ingredients`,
//         newIngredient
//       );
//       dispatch({
//         type: CREATE_INEGREDIENT,
//         payload: { newIngredient: response.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
export const createIngredient = (newIngredient) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      // const res = await instance.post(`/ingredients`, formData);
      const res = await axios.post(
        "http://localhost:8001/ingredients",
        newIngredient
      );

      // const res = await instance.post(`/ingredients`, formData);
      dispatch({
        type: CREATE_INEGREDIENT,
        payload: { newIngredient: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const updateIngredient = (updatedIngredient) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       for (const key in updatedIngredient)
//         formData.append(key, updatedIngredient[key]);
//       const res = await instance.put(
//         `/ingredients/${updatedIngredient.id}`,
//         formData
//       );
//       dispatch({
//         type: UPDATE_PRODUCT,
//         payload: { updatedIngredient: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const deleteIngredient = (ingredientId) => {
//   return async (dispatch) => {
//     try {
//       await instance.delete(`/ingredients/${ingredientId}`);
//       dispatch({
//         type: DELETE_INEGREDIENT,
//         payload: { ingredientId: ingredientId },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
