import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      let isAvailable = false;
      for (const element of state.cartItems) {
        if (element.id === action.payload.id) {
          element.quantity++;
          isAvailable = true;
          return;
        }
      }
      if (!isAvailable) {
        action.payload.quantity = 1;
        state.cartItems.push(action.payload);
      }
    },
    removeItem(state, action) {
      const newItems = state.cartItems.filter((el) => el.id !== action.payload);
      state.cartItems = newItems;
    },
    addQuantity(state, action) {
      const newItems = state.cartItems.map((el) =>
        el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el,
      );
      state.cartItems = newItems;
    },
    removeQuantity(state, action) {
      for (const el of state.cartItems) {
        if (el.id === action.payload) {
          let quantity = el.quantity;
          if (quantity > 1) {
            el.quantity--;
            return;
          }

          const index = state.cartItems.findIndex(
            (e) => e.id === action.payload,
          );
          state.cartItems.splice(index, 1);
        }
      }
    },
  },
});

export const { add, removeItem, addQuantity, removeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
