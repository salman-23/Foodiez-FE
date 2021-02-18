import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import ingredientReducer from "./ingredientReducer";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  categoryReducer,
  ingredientReducer,
  recipeReducer,
});

export default rootReducer;
