import React, { useState, useEffect } from "react";

const Usehook1 = ({ id }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/108`
      );
      const characterData = await response.json();
      setCharacter(characterData);
    };
    fetchCharacter();

    return () => {
      // Cleanup logic, if necessary
    };
  }, [id]);

  return (
    <div>
      {" "}
      {character ? (
        <>
          <h1> {character.name} </h1> <p> {character.gender} </p>{" "}
        </>
      ) : (
        <p> Loading Character... </p>
      )}{" "}
    </div>
  );
};

export default Usehook1;
