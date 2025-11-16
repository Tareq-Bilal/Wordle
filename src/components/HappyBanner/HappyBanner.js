import React from "react";
import RestartButton from "../RestartButton/RestartButton";

function HappyBanner({ numberOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${numberOfGuesses} guesses`}</strong>.
        <RestartButton />
      </p>
    </div>
  );
}

export default HappyBanner;
