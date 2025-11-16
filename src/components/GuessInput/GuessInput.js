import React from "react";
function GuessInput({ guess, setGuess, onSubmit }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        onSubmit(guess);
        setGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
    </form>
  );
}

export default GuessInput;
