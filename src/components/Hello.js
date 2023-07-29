import React, { useState } from "react";

const Hello = () => {
  const [text, setText] = useState("Hello, world!");
  const welcome = () => {
    setText("Welcome to React Class");
  };
  return (
    <div>
      <button onClick={welcome}> {text} </button>{" "}
    </div>
  );
};

export default Hello;
