import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import ingredientReducer from "./ingredientReducer";

const rootReducer = combineReducers({
  categoryReducer,
  ingredientReducer,
});

export default rootReducer;
