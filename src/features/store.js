import productReducer from "./productSlice.js";
import cartReducer from "./cartSlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
