// Importing the redux library
const redux = require("redux");

// Reducer function
const countReducer = (state = { counter: 0 }, action) => {
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
  // default state that is returned
  state;
};

// Creating a store instance with createstore
const store = redux.createStore(countReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Subscribing the component to the store
store.subscribe(counterSubscriber);

//dispatch an action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
