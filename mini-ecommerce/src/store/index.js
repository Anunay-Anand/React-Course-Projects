// importing the redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// importing redux state slices
import cartReducer from "./cart";

// Create store with the state slices or simply combine all reducers
const store = configureStore({
  reducer: { cart: cartReducer.reducer },
});

export default store;
