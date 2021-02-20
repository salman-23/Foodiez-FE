import { FETCH_RECIPE, CREATE_RECIPE } from "../actions/types";

const initialState = {
  recipes: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPE:
      return {
        ...state,
        recipe: action.payload.recipe,
        // loading: false,
      };

    case CREATE_RECIPE:
      const { newRecipe } = action.payload;
      return {
        ...state,
        recipe: [...state.recipe, newRecipe],
      };
    default:
      return state;
  }
};

export default reducer;
