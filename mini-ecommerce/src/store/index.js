// importing the redux toolkit
import { createSlice, configureStore } from "@reduxjs/toolkit";

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

// Create store with the state slices or simply combine all reducers
const store = configureStore({
  reducer: cartReducer.reducer,
});

// Exporting the action keys for dispatching action from components
export const cartActions = cartReducer.actions;

export default store;
