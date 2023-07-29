import React, { useState, useMemo } from "react";

const expensiveComputation = (num) => {
  console.log("Running expensive computation...");
  // Expensive computation logic here
  return num * num;
};
const Usememo = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <p> Result: {result} </p>{" "}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment count{" "}
      </button>{" "}
    </div>
  );
};

export default Usememo;
