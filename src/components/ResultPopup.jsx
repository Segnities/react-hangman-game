import React, { useEffect } from "react";

import { checkWin } from "../helpers/status_helper";

const ResultPopup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  const winStatus = checkWin(correctLetters, wrongLetters, selectedWord);

  let message = "";
  let revealWord = "";
  let playable = true;

  if (winStatus === "win") {
    message = "Congratulations! You won!";
    playable = false;
  } else if (winStatus === "lose") {
    message = "Unfortunately you lost...";
    revealWord = `...the word was ${selectedWord}`;
    playable = false;
    
  }

  useEffect(() => {
    setPlayable(playable);
  }, []);

  return (
    <div
      className="popup-container"
      style={message !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{message}</h2>
        <h3>{revealWord}</h3>
        <button onClick={playAgain}>Play again?</button>
      </div>
    </div>
  );
};

export default ResultPopup;
