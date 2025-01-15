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
    catoegories(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },
    loading(state) {
      state.isLoading = true;
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

export function getCategories(catoegory) {
  return async (dispatch, getState) => {
    dispatch({ type: "product/loading" });
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${catoegory}`,
    );
    const data = await res.json();
    dispatch({ type: "product/catoegories", payload: data });
  };
}
