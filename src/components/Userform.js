import React, { useState } from "react";

const Userform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  console.log({ firstName }, { lastName }, { email });

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />{" "}
          {/* Other form elements */}{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};
export default Userform;
