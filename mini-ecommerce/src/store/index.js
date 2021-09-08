// importing the redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// importing redux state slices
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";

// Create store with the state slices or simply combine all reducers
const store = configureStore({
  reducer: { ui: uiReducer.reducer, cart: cartReducer.reducer },
});

export default store;
