// Importing React and other libraries
import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

// Creating Custom Hook
export const useStore = () => {
  // We are only interested in the set value of global state
  const setState = useState(globalState)[1];

  // Creating a global dispatch
  const dispatch = (actionIdentifier) => {
    // We pass an actionKey to select specific action from object and provide prevState
    const newState = actions[actionIdentifier](globalState);
    // New globalState is then formed with globalState + newState
    globalState = { ...globalState, ...newState };
    // Telling all pages of changed state
    for (let listener of listeners) {
      listener(globalState);
    }
  };

  // Creating our global listener
  // Listener is created with simply setState when the component Mounts
  useEffect(() => {
    listeners.push(setState);

    // This function is created when the component is Unmounted.
    // It will remove all listener attached to the global Listener that are not setState or related to that component
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (!initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
