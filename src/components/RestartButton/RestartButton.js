import React from "react";

function RestartButton() {
  return (
    <button className="restart button" onClick={() => window.location.reload()}>
      Restart Game
    </button>
  );
}

export default RestartButton;
