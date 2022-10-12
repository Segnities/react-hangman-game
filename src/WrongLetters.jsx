import { nanoid } from "nanoid";
import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong letters - {wrongLetters.length}</p>}
        {wrongLetters
          .map((letter) => <span key={nanoid()}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ",", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
