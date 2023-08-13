import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.item = [...state.item, action.payload.data];
      state.total = state.item.length;
    },
    removeCart: (state, action) => {
      console.log(action.payload.id);
      const newCart = state.item.filter((i) => +i.id !== +action.payload.id);
      state.item = newCart;
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
