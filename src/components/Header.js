import React, { useState } from "react";
import { IoCaretForward } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import logo from "../Images/royal_games_logo.png";

function Header() {
  const [login, setLogin] = useState(true); // State to manage login
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const navigate = useNavigate(); // Create a navigate function

  const handleLogout = () => {
    // Handle logout logic here
    setLogin(false);
    setDropdownOpen(false); // Close the dropdown on logout
  };

  const handleLoginClick = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="top-0">
      <div className="bg-gradient-to-r from-[#140934] to-[#35188c] flex py-4 px-8">
        {/* Logo */}
        <div className="w-4/12 flex items-center">
          <img className="h-16" src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="w-4/12 flex gap-6 justify-center items-center">
          <button className="text-white hover:text-yellow-400 font-bold">
            Home
          </button>
          <button className="text-white hover:text-yellow-400 font-bold">
            My matches
          </button>
          <button className="text-white hover:text-yellow-400 font-bold">
            Leaderboard
          </button>
          <div className="flex justify-center items-center space-x-2">
            <button className="text-white hover:text-yellow-400 font-bold">
              More
            </button>
            <IoCaretForward className="text-white w-6 h-6" />
          </div>
        </div>

        {/* User Information and Notifications */}
        <div className="w-4/12 flex justify-end items-center gap-4 relative">
          {/* Balance Button */}
          <button className="border-solid border-2 border-[#edb83a] text-[#edb83a] px-4 py-1 rounded-r-xl rounded-l-xl">
            ₹ 2000
          </button>

          {/* Notification Icon */}
          <FaBell className="text-yellow-400 w-6 h-6" />

          {/* Conditional Rendering for Login/User */}
          {login ? (
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">Username</span>
              {/* Dropdown Toggle */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white hover:text-yellow-400 font-bold flex items-center space-x-1"
                >
                  <IoCaretForward className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-10">
                    <ul className="py-2">
                      <li
                        onClick={handleLogout}
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={handleLoginClick} // Redirect to login page
              className="text-white hover:text-yellow-400 font-bold"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
