import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/addCart";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
