// Import from redux library and redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// Creating initial state for the reducer functions for Authentication
const intitialAuthState = { isAuthenticated: false };

// Using createSlice for auth related state management
const authSlice = createSlice({
  name: "authentication",
  initialState: intitialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// exporting actions keys
export const authActions = authSlice.actions;

export default authSlice;
