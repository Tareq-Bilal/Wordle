import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessSlot from "../GuessSlot/GuessSlot";
import { sample } from "../../utils";
import { WORDS } from "../../data";

const answer = sample(WORDS);
console.info({ answer });

function GuessGrid({ guesses, numberOfGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <GuessSlot
          key={index}
          guess={guesses[index] || 0}
          numberOfGuesses={numberOfGuesses}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessGrid;
