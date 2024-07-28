import React from "react";

const GameCard = ({ img, city, color }) => {
  return (
    <div>
      <div className="relative w-44 h-48 rounded-xl overflow-hidden flex-shrink-0">
        {/* Image with Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to top, ${color},transparent,transparent)`,
            zIndex: 1,
          }}
        ></div>
        <img className="w-full h-full object-cover" src={img} alt={city} />

        {/* Text Overlay */}
        <div
          className="absolute inset-0 flex justify-center items-end pb-4"
          style={{ zIndex: 2 }}
        >
          <h1 className="text-white text-xl font-bold shadow-lg">{city}</h1>
        </div>
      </div>
    </div>
  );
};

GameCard.defaultProps = {
  color: "blue",
};

export default GameCard;
