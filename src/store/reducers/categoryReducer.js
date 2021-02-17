import { FETCH_CATEGORY, CREATE_CATEGORY } from "../actions/types";

const initialState = {
  categories: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        categories: action.payload.categories,
        // loading: false,
      };

    case CREATE_CATEGORY:
      const { newCategory } = action.payload;
      return {
        ...state,
        categories: [...state.categories, newCategory],
      };
    default:
      return state;
  }
};

export default reducer;
