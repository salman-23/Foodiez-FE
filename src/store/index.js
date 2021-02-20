import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { fetchCategoty } from "./actions/categoryActions";
import { fetchIngredient } from "./actions/ingredientActions";
import { fetchRecipe } from "./actions/recipeActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// Ingredient
store.dispatch(fetchCategoty());
store.dispatch(fetchIngredient());
store.dispatch(fetchRecipe());

export default store;
