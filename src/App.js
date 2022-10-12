import { useEffect, useState } from "react";
import Header from "./components/UI/Header/Header";

import { showNotification as notification } from "./helpers/notification_helper";
import { randomWord } from "./utils/randomWordGenerator";

import HangedMan from "./components/HangedMan";
import WrongLetters from "./WrongLetters";
import SelectedWord from "./components/SelectedWord";
import ResultPopup from "./components/ResultPopup";
import Notification from "./components/Notification";

import "./App.css";

let selectedWord = randomWord();

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

   function handleButtonKeyDown(event) {
    const { key, keyCode } = event;

    if (playable && keyCode >= 65 && keyCode <= 90) {
      const typed_letter = key.toLowerCase();
      if (selectedWord.includes(typed_letter)) {
        if (!correctLetters.includes(typed_letter)) {
          setCorrectLetters((currentLetters) => [
            ...currentLetters,
            typed_letter,
          ]);
        } else {
          notification(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(typed_letter)) {
          setWrongLetters((currentLetters) => [
            ...currentLetters,
            typed_letter,
          ]);
        } else {
          notification(setShowNotification);
        }
      }
    }
  }

  function playAgain() {
    selectedWord = randomWord();
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleButtonKeyDown);

    return function () {
      window.removeEventListener("keydown", handleButtonKeyDown);
    };
  }, [playable, correctLetters, wrongLetters]);

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <HangedMan wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <SelectedWord
          selectedWord={selectedWord}
          correctLetters={correctLetters}
        />
      </div>
      <ResultPopup
        correctLetters={correctLetters}
        playAgain={playAgain}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        wrongLetters={wrongLetters}
      />
      <Notification showNotification={showNotification}/>
    </div>
  );
}

export default App;
