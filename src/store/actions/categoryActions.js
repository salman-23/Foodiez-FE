import { FETCH_CATEGORY, CREATE_CATEGORY } from "../actions/types";

import instance from "./instance";
import axios from "axios";

export const fetchCategoty = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/categories");
      dispatch({
        type: FETCH_CATEGORY,
        payload: { categories: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const createCategory = (newCategory) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         `http://localhost:8001/categories`,
//         newCategory
//       );
//       dispatch({
//         type: CREATE_CATEGORY,
//         payload: { newCategory: response.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
export const createCategory = (newCategory) => {
  return async (dispatch) => {
    try {
      // const formData = new FormData();
      // for (const key in newCategory) formData.append(key, newCategory[key]);
      // const res = await instance.post(`/categories`, formData);
      const res = await axios.post(
        "http://localhost:8001/categories",
        newCategory
      );

      // const res = await instance.post(`/categories`, formData);
      dispatch({
        type: CREATE_CATEGORY,
        payload: { newCategory: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
