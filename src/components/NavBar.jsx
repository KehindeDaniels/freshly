// NavBar.jsx
import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
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
    <header className="flex items-center justify-between px-4 py-2 bg-white">
      <div className="flex items-center flex-grow">
        <img src={logo} alt="Freshly Logo" className="w-20 mr-4" />
        <div
          className={`search-bar flex items-center border rounded-full p-2 ${
            isSearchOpen ? "flex-grow" : "w-auto"
          }`}
        >
          <FaSearch className="text-green-500" onClick={toggleSearch} />
          <input
            type="text"
            placeholder="Search fresh produce"
            className={`outline-none ml-2 flex-grow ${
              !isSearchOpen && "hidden md:block"
            }`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <Link to="/cart">
        <div className="cart relative">
          <FaShoppingCart className="w-8 h-8" />
          {totalItems > 0 && (
            <div className="cartNumber absolute -top-1 right-0 flex justify-center items-center bg-green-400 text-white w-6 h-6 rounded-full">
              {totalItems}
            </div>
          )}
        </div>
      </Link>
    </header>
  );
};

export default NavBar;
