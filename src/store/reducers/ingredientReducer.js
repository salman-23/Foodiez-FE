import { FETCH_INEGREDIENT, CREATE_INEGREDIENT } from "../actions/types";
// ingredient
// INEGREDIENT
const initialState = {
  ingredients: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INEGREDIENT:
      return {
        ...state,
        ingredients: action.payload.ingredients,
        // loading: false,
      };

    case CREATE_INEGREDIENT:
      const { newCategory } = action.payload;
      return {
        ...state,
        ingredients: [...state.ingredients, newCategory],
      };
    default:
      return state;
  }
};

export default reducer;
