// Import from redux library and redux toolkit
import { createSlice, configureStore } from "@reduxjs/toolkit";

// Creating initial state for the reducer functions for counter
const initialCounterState = { counter: 0, showCounter: true };

// Using createSlice for Counter related state management
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

// Create a store for counter and auth for their it's redux functions
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// exporting actions keys
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// Creating a reducer function to dispatch action
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
