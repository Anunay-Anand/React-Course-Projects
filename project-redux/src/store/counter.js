// Import from redux library and redux toolkit
import { createSlice } from "@reduxjs/toolkit";

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

// exporting actions keys
export const counterActions = counterSlice.actions;

export default counterSlice;
