import React from "react";

import { nanoid } from "nanoid";

const SelectedWord = ({ selectedWord, correctLetters }) => {
  console.log(selectedWord);
  return (
    <div className="selected-word">
      {selectedWord.split("").map((letter) => (
        <span key={nanoid()} className="selected-word-letter">
          {correctLetters.includes(letter) ? letter : ""}
        </span>
      ))}
    </div>
  );
};

export default SelectedWord;
