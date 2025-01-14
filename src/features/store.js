import { combineReducers, createStore } from "redux";
import productReducer from "./productSlice.js";
import cartReducer from "./cartSlice.js";

const rootReducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducers);

export default store;
