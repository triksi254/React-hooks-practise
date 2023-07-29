import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    // setIsToggled(!isToggled);
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };
  return (
    <button onClick={toggle}> {isToggled ? "Turn off" : "Turn on"} </button>
  );
};
export default Toggle;
