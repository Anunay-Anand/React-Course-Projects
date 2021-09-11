import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  // using our custom hook to create counter
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
