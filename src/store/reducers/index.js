import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import ingredientReducer from "./ingredientReducer";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  categoryReducer: categoryReducer,
  ingredientReducer: ingredientReducer,
  recipeReducer: recipeReducer,
});

export default rootReducer;
