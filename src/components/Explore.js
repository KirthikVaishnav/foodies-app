import React from "react";
import { assets } from "../assets/assets";

export default function Explore() {

  return (
    <div
      className="relative bg-cover bg-center h-[400px] sm:h-[300px] md:h-[400px] lg:h-[400px]"
      style={{
        backgroundImage: `url(${assets.cover})`, // Replace with your image URL
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Text */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Discover the Best of Food
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-6">
          Explore a wide variety of delicious cuisines and find your next favorite meal.
        </p>

        {/* Explore Button */}
        <button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-xl"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}
