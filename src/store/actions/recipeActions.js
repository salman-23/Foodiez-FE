import { FETCH_RECIPE, CREATE_RECIPE } from "../actions/types";

import instance from "./instance";

export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/recipes");
      dispatch({
        type: FETCH_RECIPE,
        payload: { recipes: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const createRecipes = (newRecipes) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       for (const key in newRecipes) formData.append(key, newRecipes[key]);
//       const res = await instance.post(
//         `/categories/${newRecipes.categoryId}/recipes`,
//         formData
//       );
//       dispatch({
//         type: CREATE_RECIPE,
//         payload: { newRecipes: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
