import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking
import { FaCrown } from "react-icons/fa";
import img from "../Images/live_game_3.jpeg";
function GameInfo({
  gameName,
  bettingOpenTime,
  bettingCloseTime,
  lastWinnerNumber,
  royalWinnerText,
  yellowColor,
}) {
  return (
    <div>
      <div className="game-info bg-gradient-to-b to-[#140934] from-[#35188c] rounded-xl flex justify-between">
        <div className="game-details flex p-8">
          <img
            src={img}
            alt="Game"
            className="game-image h-50 w-44 rounded-2xl border-2"
            style={{ borderColor: yellowColor }}
          />
          <div className="pt-3 px-2">
            <div className="game-name pb-3">
              <p className="font-bold text-white">Game Name</p>
              <h1 className="font-bold text-lg" style={{ color: yellowColor }}>
                {gameName}
              </h1>
            </div>
            <div className="bet-time pb-3">
              <p className="font-bold text-white">Betting Open Time</p>
              <h1 className="font-bold text-lg" style={{ color: yellowColor }}>
                {bettingOpenTime}
              </h1>
            </div>
            <div className="pb-3">
              <p className="font-bold text-white">Betting Close Time</p>
              <h1 className="font-bold text-lg" style={{ color: yellowColor }}>
                {bettingCloseTime}
              </h1>
            </div>
          </div>
        </div>
        <div className="winner-info flex flex-col justify-center items-center p-12 w-6/12">
          <div
            className="last-winner rounded-full w-32 border h-32"
            style={{ backgroundColor: yellowColor }}
          >
            <div className="winner-number flex flex-col justify-center items-center">
              <div className="relative top-4 left-6 rotate-12 ">
                <FaCrown style={{ color: "white" }} />
              </div>
              <h1 className="text-6xl text-white font-bold">
                {lastWinnerNumber}
              </h1>
              <div className="winner-text text-white">Last Winner</div>
            </div>
          </div>
          <div
            className="royal-winner text-xl mt-2 font-bold"
            style={{ color: yellowColor }}
          >
            {royalWinnerText}
          </div>
        </div>
      </div>
    </div>
  );
}

// Set default props
GameInfo.defaultProps = {
  gameName: "TAJ",
  bettingOpenTime: "5:40 PM",
  bettingCloseTime: "6:30 PM",
  lastWinnerNumber: "93",
  royalWinnerText: "The Royal Winner",
  yellowColor: "#FFD700", // Default yellow color (Gold)
  image: "../Images/live_game_3.jpeg", // Default image path
};

// Define prop types for better type checking and documentation
GameInfo.propTypes = {
  gameName: PropTypes.string,
  bettingOpenTime: PropTypes.string,
  bettingCloseTime: PropTypes.string,
  lastWinnerNumber: PropTypes.string,
  royalWinnerText: PropTypes.string,
  yellowColor: PropTypes.string,
};

export default GameInfo;
