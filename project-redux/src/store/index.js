// Import from redux library
import { createStore } from "redux";

// Creating a reducer function to dispatch action
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// Create a store for state with redux
const store = createStore(counterReducer);

export default store;
