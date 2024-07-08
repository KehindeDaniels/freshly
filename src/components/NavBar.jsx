import React, { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import logo from "/assets/logo.png";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(true); // Default to true for larger screens
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Effect to manage the state of search bar based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSearchOpen(false); // Collapse on small screens
      } else {
        setIsSearchOpen(true); // Expand on large screens
      }
    };

    // Set initial state based on current window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white border-b-[1px] overflow-hidden">
      <Link to="/" className="flex items-start">
        <img src={logo} alt="Freshly Logo" className="w-20" />
      </Link>
      <div
        className={`search-bar flex items-center border rounded-lg p-2 md:pr-32 md:pl-8 ${
          isSearchOpen ? "flex-grow-0" : ""
        }`}
      >
        <FaSearch
          className="text-gray-400 mr-2 cursor-pointer"
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
