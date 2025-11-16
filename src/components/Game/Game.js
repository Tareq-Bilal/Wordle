import React from "react";
import { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessGrid from "../GuessGrid/GuessGrid";

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  // const [guessCounter, setGuessCounter] = useState(0);
  return (
    <>
      <GuessGrid guesses={guesses} numberOfGuesses={guesses.length} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        onSubmit={(newGuess) => {
          setGuesses([...guesses, newGuess]);
          // setGuessCounter(guessCounter + 1);
        }}
      />
    </>
  );
}

export default Game;
