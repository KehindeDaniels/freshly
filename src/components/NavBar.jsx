// NavBar.jsx
import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext"; // Ensure the path is correct based on your structure
import logo from "/assets/logo.png";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart(); // Use totalItems from the cart context

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b-[1px]">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Freshly Logo" className="w-20" />
      </Link>
      <div
        className={`search-bar flex items-center border rounded-lg p-2 ${
          isSearchOpen ? "" : ""
        }`}
      >
        <FaSearch
          className="text-green-500 mr-2 cursor-pointer"
          onClick={toggleSearch}
        />
        <input
          type="text"
          placeholder="Search fresh produce"
          className={`outline-none flex-grow ${!isSearchOpen && "hidden"}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/favorites"
          className="p-2 rounded-full text-gray-700 bg-gray-300"
        >
          <FaHeart />
        </Link>
        <Link
          to="/cart"
          className="relative p-2 rounded-full text-gray-700 bg-gray-300"
        >
          <FaShoppingCart className="" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full px-2 py-1 text-xs">
              {totalItems}
            </span>
          )}
        </Link>
        <Link
          to="/profile"
          className="p-2 rounded-full text-gray-700 bg-gray-300"
        >
          <FaUser />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
