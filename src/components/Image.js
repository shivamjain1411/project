import React, { useState, useEffect } from "react";

function ImageCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle view
  const handleToggle = () => {
    console.log("Before toggle:", isExpanded); // This shows the current state
    setIsExpanded(!isExpanded); // State update
  };

  // useEffect to log the updated state after it changes
  useEffect(() => {
    console.log("After toggle:", isExpanded); // This shows the updated state
  }, [isExpanded]); // Dependency array ensures it runs after 'isExpanded' changes

  return (
    <div className="max-w-sm mx-auto p-4">
      <button onClick={handleToggle}>Trying console</button>
      <div
        className={`relative w-72 h-80 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
          isExpanded ? "bg-blue-600" : ""
        }`}
      >
        {/* Image and Overlay */}
        <img
          src="https://via.placeholder.com/300x400" // Replace with your image URL
          alt="Faridabad"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isExpanded ? "opacity-20" : ""
          }`}
        />

        {/* Top-right Button */}
        <button
          className="absolute top-2 right-2 border border-red-900  bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-colors duration-200"
          onClick={handleToggle}
        >
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
              onClick={handleToggle}
            >
              <path
                fillRule="evenodd"
                d="M18 12H6a1 1 0 010-2h12a1 1 0 010 2z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
              onClick={handleToggle}
            >
              <path
                fillRule="evenodd"
                d="M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Text Overlay */}
        {!isExpanded && (
          <div className="absolute inset-0 flex items-end justify-center pb-4">
            <span className="text-white text-2xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-md">
              FARIDABAD
            </span>
          </div>
        )}

        {/* Expanded View */}
        {isExpanded && (
          <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center">
            <h2 className="text-white text-3xl font-bold mb-4">FARIDABAD</h2>
            <div className="text-white text-lg flex flex-col items-center space-y-2">
              <div className="flex justify-between w-full">
                <span>Bet Close Time</span>
                <span>5:40 PM</span>
              </div>
              <div className="flex justify-between w-full">
                <span>Bet Close Time</span>
                <span>6:30 PM</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageCard;
