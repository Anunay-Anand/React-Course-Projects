import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
  // using useState hook to store the changed counter value
  const [counter, setCounter] = useState(0);

  // using useEffect to Create Interval on Webpage loading
  useEffect(() => {
    // Setting setInterval when the DOM renders as the page is loaded the first time
    const timer = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => {
          return prevCounter + 1;
        });
      } else {
        setCounter((prevCounter) => {
          return prevCounter - 1;
        });
      }
    }, 1000);

    // Clearing function to clear the timer of previous
    return () => {
      clearInterval(timer);
    };
  }, [forwards]);

  return counter;
};

export default useCounter;
