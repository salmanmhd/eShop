import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      quantity: 1,
    },
  ],
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
