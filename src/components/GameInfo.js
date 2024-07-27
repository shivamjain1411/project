import React from "react";
import gameimg from "../Images/live_game_3.jpeg";
import { FaCrown } from "react-icons/fa";
function GameInfo() {
  return (
    <div>
      <div className="game-info bg-gradient-to-b to-[#140934] from-[#35188c] rounded-xl flex justify-between">
        <div className="game-details flex p-8">
          <img
            src={gameimg}
            alt="Game"
            className="game-image h-50 w-44 rounded-2xl border-2 border-yellow-400"
          />
          <div className="pt-3 px-2">
            <div className="game-name pb-3">
              <p className="font-bold text-white">Game Name</p>{" "}
              <h1 className="font-bold text-lg text-yellow-400">TAJ</h1>
            </div>
            <div className="bet-time pb-3">
              <p className="font-bold text-white">Betting Close Time</p>
              <h1 className="font-bold text-lg text-yellow-400"> 5:40 PM</h1>
            </div>
            <div className="pb-3">
              <p className="font-bold text-white">Betting Close Time</p>
              <h1 className="font-bold text-lg text-yellow-400"> 6:30 PM</h1>
            </div>
          </div>
        </div>
        <div className="winner-info flex flex-col justify-center items-center p-12 w-6/12 ">
          <div className="last-winner bg-yellow-400 rounded-full w-32 border h-32">
            <div className="winner-number flex flex-col justify-center items-center">
              <div className="relative top-4 left-6 rotate-12 ">
                <FaCrown style={{ color: "white" }} />
              </div>
              <h1 className="text-6xl text-white font-bold">93</h1>
              <div className="winner-text text-white">Last Winner</div>
            </div>
          </div>
          <div className="royal-winner text-xl mt-2 font-bold text-yellow-400">
            The Royal Winner
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
