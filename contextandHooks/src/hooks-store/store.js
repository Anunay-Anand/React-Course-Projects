// Importing React and other libraries
import { useState, useEffect } from "react";

let globalStore = {};
let listeners = [];
let actions = {};

// Creating Custom Hook
const useStore = () => {
  // We are only interested in the set value of global state
  const setState = useState(globalStore)[1];

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
};

export default useStore;
