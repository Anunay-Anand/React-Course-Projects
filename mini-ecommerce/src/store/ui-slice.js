// importing the redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state object
const uiInitialState = { isCartVisible: false };

// Creating out first slice or redux functions to manage cart actions
const uiReducer = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showCartToggler(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

// Exporting the action keys for dispatching action from components
export const uiActions = uiReducer.actions;

// Exporting slice reducer for store
export default uiReducer;
