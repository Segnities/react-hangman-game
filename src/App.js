import { useEffect, useState } from "react";
import Header from "./components/UI/Header/Header";

import { showNotification as notification } from "./helpers/notification_helper";
import { randomWord } from "./utils/randomWordGenerator";

import "./App.css";
import HangedMan from "./components/HangedMan";
import WrongLetters from "./WrongLetters";

let selectedWord;

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  function handleButtonKeyDown(event) {
    console.log(`${handleButtonKeyDown.name} worked!`);
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
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    selectedWord = randomWord();
    console.log(`${new Date().toLocaleTimeString()}: `, selectedWord);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleButtonKeyDown);

    return function () {
      window.removeEventListener("keydown", handleButtonKeyDown);
      selectedWord = randomWord();
    };
  }, [playable, correctLetters, wrongLetters]);

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <HangedMan wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
      </div>
    </div>
  );
}

export default App;
