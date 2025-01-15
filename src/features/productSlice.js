import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  query: "",
  catoegory: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    get(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;

export function getProducts() {
  return async (dispatch, getState) => {
    dispatch({ type: "product/loading" });
    const res = await fetch("https://fakestoreapi.com/products?limit=100");
    const data = await res.json();
    dispatch({ type: "product/get", payload: data });
  };
}
