// importing the redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state object
const cartInitialState = { isCartVisible: false };

// Creating out first slice or redux functions to manage cart actions
const cartReducer = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    showCartToggler(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

// Exporting the action keys for dispatching action from components
export const cartActions = cartReducer.actions;

// Exporting slice reducer for store
export default cartReducer;
