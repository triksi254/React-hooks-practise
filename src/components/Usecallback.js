import React, { useState, useCallback } from "react";

const ExpensiveChildComponent = React.memo(({ onButtonClick }) => {
  console.log("ExpensiveChildComponent rendering...");
  return <button onClick={onButtonClick}> Click me </button>;
});

const Usecallback = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <p> Count: {count} </p>{" "}
      <ExpensiveChildComponent onButtonClick={handleButtonClick} />{" "}
    </div>
  );
};

export default Usecallback;
