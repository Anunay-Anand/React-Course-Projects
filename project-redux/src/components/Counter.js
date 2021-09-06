import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // using useSelector hook to use Store
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  // Creating dispatch function from useDispatch
  const dispatch = useDispatch();

  // Increment dispatch handler
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  // Decrement dispatch handler
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  // Increase dispatch handler
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  // toggle dispatch handler
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
