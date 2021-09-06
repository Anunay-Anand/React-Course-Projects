// Import from redux library
import { createStore } from "redux";

// Creating a reducer function to dispatch action
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

// Create a store for state with redux
const store = createStore(counterReducer);

export default store;
