import React from "react";
import GameInfo from "../components/GameInfo";
import GameBody from "../components/GameBody";

function GamePage() {
  return (
    <div className="bg-[#140934] p-8">
      <GameInfo
        gameName="TAJ"
        bettingOpenTime="5:40 PM"
        bettingCloseTime="6:30 PM"
        lastWinnerNumber="93"
        royalWinnerText="The Royal Winner"
        yellowColor="#FFD700" // Use any color you want here
      />
      <GameBody
        initialTotalAmount={0}
        maxAmount={5000}
        numbers={Array.from({ length: 100 }, (_, i) => i)} // Pass numbers
        primaryColor="#FFD700" // Gold
        hoverColor="#FFA500" // Orange
        headerTitles={["Jodi", "Harup", "Crossing"]}
        betButtonText="Place a Bet"
      />
    </div>
  );
}

export default GamePage;
