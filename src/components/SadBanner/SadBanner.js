import React from "react";
import RestartButton from "../RestartButton/RestartButton";

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton />
    </div>
  );
}

export default SadBanner;
