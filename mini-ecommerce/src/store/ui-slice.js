// importing the redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state object
const uiInitialState = {
  isCartVisible: false,
  notification: null,
};

// Creating out first slice or redux functions to manage cart actions
const uiReducer = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showCartToggler(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      // Updating the previous state with updated State without mutating
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

// Exporting the action keys for dispatching action from components
export const uiActions = uiReducer.actions;

// Exporting slice reducer for store
export default uiReducer;
