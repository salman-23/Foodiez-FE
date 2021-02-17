import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { fetchCategoty } from "./actions/categoryActions";
import { fetchIngredient } from "./actions/ingredientActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
// Ingredient
store.dispatch(fetchCategoty());
store.dispatch(fetchIngredient());

export default store;
