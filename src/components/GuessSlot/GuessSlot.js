import React from "react";
import Cell from "../Cell/Cell";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import HappyBanner from "../HappyBanner/HappyBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import SadBanner from "../SadBanner/SadBanner";
import RestartButton from "../RestartButton/RestartButton";

function GuessSlot({ guess, numberOfGuesses, answer }) {
  const guessLength = guess ? Math.min(Math.max(guess.length, 1), 5) : 0;
  const result = checkGuess(guess, answer);
  const isCorrect = result && result.every((r) => r.status === "correct");
  console.log(numberOfGuesses);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={num < guessLength ? guess[num] : undefined}
          status={result && num < guessLength ? result[num].status : undefined}
        />
      ))}
      {isCorrect && <HappyBanner numberOfGuesses={numberOfGuesses} />}
      {!isCorrect && numberOfGuesses === NUM_OF_GUESSES_ALLOWED && (
        <SadBanner answer={answer} />
      )}
    </p>
  );
}

export default GuessSlot;
