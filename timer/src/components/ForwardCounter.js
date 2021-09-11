import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  // Calling or using our custom Hook
  const counter = useCounter();

  //   const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter((prevCounter) => prevCounter + 1);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
