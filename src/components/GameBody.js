import React, { useState } from "react";

function GameBody() {
  const [totalAmount, setTotalAmount] = useState(500);

  const numbers = Array.from({ length: 100 }, (_, i) => i); // Including 0 to 99

  return (
    <div className="bg-indigo-900 p-6 rounded-3xl w-10/12 mx-auto border-2 border-yellow-400">
      {/* Header */}
      <div className="flex justify-between text-yellow-400 font-bold mb-4">
        <div className="w-4/12 flex justify-center items-center">
          <div className="w-5/12 border-0 border-b-4 border-yellow-500 flex items-center justify-center">
            <span>Jodi</span>
          </div>
        </div>
        <div className="w-4/12 flex justify-center items-center text-white">
          <span>Harup</span>
        </div>
        <div className="w-4/12 flex justify-center items-center text-white">
          <span>Crossing</span>
        </div>
      </div>

      {/* Game Grid */}
      <div className="bg-gradient-to-b to-[#140934] from-[#35188c] p-4 rounded-lg">
        <h2 className="text-center text-indigo-900 font-bold mb-4">
          Choose any number to place a Bet
        </h2>
        <p className="text-center text-indigo-900 mb-4">Maximum Amount 5000₹</p>

        {/* Grid with 13 Columns */}
        <div className="grid grid-cols-13 gap-2 mx-auto">
          {numbers.map((num) => (
            <React.Fragment key={num}>
              {/* Check if it's the last row (91-99), then add placeholders */}
              {num === 91 && <div className="col-span-2" />}

              <button
                className={` rounded-2xl font-bold transition duration-300 shadow-md h-16 w-16 ${
                  (num % 13) % 2 === 0
                    ? "bg-yellow-400 text-white hover:bg-yellow-500"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                <h1>{num}</h1>
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-start items-center">
          <div className="text-white w-4/12 flex flex-col items-center">
            <span className="font-bold">TOTAL AMOUNT</span>
            <span className="text-2xl text-yellow-400">₹ {totalAmount}</span>
          </div>
          <div className="w-4/12 flex justify-center items-center">
            <button className="bg-yellow-400 w-9/12 text-black font-bold text-xl py-2 px-4 rounded hover:bg-yellow-500">
              Place a Bet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBody;
