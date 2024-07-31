import React, { useState } from "react";
import PropTypes from "prop-types";

function GameBody({
  initialTotalAmount,
  maxAmount,
  numbers,
  primaryColor,
  hoverColor,
  headerTitles,
  betButtonText,
}) {
  const [totalAmount, setTotalAmount] = useState(initialTotalAmount);
  const [clickedNumbers, setClickedNumbers] = useState([]);

  // Make sure numbers is defined, otherwise set to an empty array
  const validNumbers = numbers || [];

  // Handle button click to update state
  const handleNumberClick = (num) => {
    if (!clickedNumbers.includes(num)) {
      setClickedNumbers([...clickedNumbers, num]);
      setTotalAmount((prevAmount) => prevAmount + 100);
    }
  };

  return (
    <div>
      {/* Header */}
      <div
        className="flex justify-between font-bold mb-4"
        style={{ color: primaryColor }}
      >
        {headerTitles.map((title, index) => (
          <div key={index} className="w-4/12 flex justify-center items-center">
            <div
              className={`w-5/12 flex items-center justify-center ${
                title === "Jodi" ? "border-b-4" : ""
              }`}
              style={{
                borderColor: title === "Jodi" ? hoverColor : "transparent",
              }}
            >
              <span>{title}</span>
            </div>
          </div>
        ))}
      </div>

      <div
        className="bg-indigo-900 p-6 rounded-3xl w-10/12 mx-auto border-2"
        style={{ borderColor: primaryColor }}
      >
        {/* Game Grid */}
        <div className="bg-gradient-to-b to-[#140934] from-[#35188c] p-4 rounded-lg">
          <h2 className="text-center font-bold mb-1 text-white">
            Choose any number to place a Bet
          </h2>
          <p className="text-center font-bold text-yellow-400 mb-6">
            Maximum Amount {maxAmount}₹
          </p>

          {/* Grid with 13 Columns */}
          <div className="grid grid-cols-13 gap-2 mx-auto">
            {validNumbers.map((num) => (
              <React.Fragment key={num}>
                {/* Check if it's the last row (91-99), then add placeholders */}
                {num === 91 && <div className="col-span-2" />}

                <button
                  onClick={() => handleNumberClick(num)}
                  className={`rounded-2xl font-bold transition duration-300 shadow-md h-16 w-16 ${
                    clickedNumbers.includes(num)
                      ? "bg-gray-500 text-white hover:bg-gray-600"
                      : (num % 13) % 2 === 0
                      ? `bg-${primaryColor} text-white hover:bg-${hoverColor}`
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                  style={{
                    backgroundColor: clickedNumbers.includes(num)
                      ? "#A9A9A9"
                      : (num % 13) % 2 === 0
                      ? primaryColor
                      : "#000000",
                    borderColor: hoverColor,
                  }}
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
              <span className="text-2xl" style={{ color: primaryColor }}>
                ₹ {totalAmount}
              </span>
            </div>
            <div className="w-4/12 flex justify-center items-center">
              <button
                className="w-9/12 text-black font-bold text-xl py-2 px-4 rounded"
                style={{
                  backgroundColor: primaryColor,
                  hover: {
                    backgroundColor: hoverColor,
                  },
                }}
              >
                {betButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

GameBody.propTypes = {
  initialTotalAmount: PropTypes.number.isRequired,
  maxAmount: PropTypes.number.isRequired,
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  primaryColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  headerTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  betButtonText: PropTypes.string.isRequired,
};

GameBody.defaultProps = {
  initialTotalAmount: 0,
  maxAmount: 5000,
  numbers: Array.from({ length: 100 }, (_, i) => i),
  primaryColor: "#FFD700", // Default to yellow
  hoverColor: "#FFA500", // Default to orange
  headerTitles: ["Jodi", "Harup", "Crossing"],
  betButtonText: "Place a Bet",
};

export default GameBody;
