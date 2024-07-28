import React from 'react'


const GameCard = () => {
  return (
    <div>
      <div className="relative w-44 h-48 rounded-xl overflow-hidden flex-shrink-0">
              {/* Image with Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-blue-600 via-transparent to-transparent"
                style={{
                  zIndex: 1,
                  
                }}
              ></div>
              <img
                className="w-full h-full object-cover"
                // src={live_game_1}
                alt="Live Game"
              />

              {/* Text Overlay */}
              <div
                className="absolute inset-0 flex justify-center items-end pb-4"
                style={{ zIndex: 2 }}
              >
                <h1 className="text-white text-xl font-bold shadow-lg">
                  FARIDABAD
                </h1>
              </div>
            </div>
    </div>
  )
}

export default GameCard
