import React from "react";
import GameInfo from "../components/GameInfo";
import GameBody from "../components/GameBody";

function GamePage() {
  return (
    <div className="bg-[#140934] p-8">
      <GameInfo />
      <GameBody />
    </div>
  );
}

export default GamePage;
