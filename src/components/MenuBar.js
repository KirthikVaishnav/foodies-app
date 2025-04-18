import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and App Name */}
        <div className="flex items-center gap-3">
          <img src={assets.logo} alt="logo" className="w-12" />
          <span className="text-xl font-bold">Foodies App</span>
        </div>

        {/* Menu for large screens */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Explore</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
        </ul>

        {/* Buttons for large screens */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg">
            Sign Up
          </button>
          <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
            <img src={assets.cart} alt="cart" className="w-6 h-6" />
          </button>
        </div>

        {/* Toggle Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Explore</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex flex-col items-center gap-3 py-4">
            <button className="w-full max-w-xs px-4 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg">
              Sign In
            </button>
            <button className="w-full max-w-xs px-4 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg">
              Sign Up
            </button>
            <button className="w-full max-w-xs px-4 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg flex items-center justify-center">
              <img src={assets.cart} alt="cart" className="w-6 h-6 mr-2" />
              Cart
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
