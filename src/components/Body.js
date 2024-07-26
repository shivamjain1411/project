import React, { useState } from "react";
import background_gif from "../Images/background_gif.gif";
import img1 from "../Images/corousal_img_1.jpeg";
import img2 from "../Images/corousal_img_2.jpeg";
import img3 from "../Images/corousal_img_3.jpeg";
import img4 from "../Images/corousal_img_4.jpeg";
import img5 from "../Images/corousal_img_5.jpeg";

function Body() {
  // Set up state using React hooks
  const [currentIndex, setCurrentIndex] = useState(0); // Use zero-based indexing for arrays
  const images = [img1, img2, img3, img4, img5]; // Add imported images here

  const next = () => {
    // If the currentIndex is the last image, reset to 0
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const back = () => {
    // If the currentIndex is the first image, go to the last one
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${background_gif})`,
      }}
    >
      <div className="p-16">
        <div className="relative w-full flex  overflow-hidden shadow-2xl h-64">
          <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
            <span>{currentIndex + 1}</span> / <span>{images.length}</span>
          </div>

          {/* Iterate over the images array */}
          {images.map((image, index) => (
            <figure
              key={index}
              className={`absolute inset-0 z-10 transition-opacity duration-300 ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full opacity-100"
              />
            </figure>
          ))}

          <button
            onClick={back}
            className="absolute top-1/2 -translate-y-1/2 w-11 h-24 flex justify-center items-center rounded-full shadow-md z-10 bg-transparent opacity-0"
          >
            <svg
              className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-24 flex justify-center items-center rounded-full shadow-md z-10 bg-transparent opacity-0"
          >
            <svg
              className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
