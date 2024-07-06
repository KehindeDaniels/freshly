import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="logo">
        <img src={logo} alt="logo" className="w-20" />
      </div>
      <nav>
        <ul className="flex gap-4">
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
        </ul>
      </nav>
      <div className="cart relative flex">
        <FaShoppingCart className="relative w-8 h-8" />
        <div className="cartNumber absolute bottom-1/2 left-1/2 flex-1 flex justify-center items-center bg-green-400 text-white w-6 h-6 rounded-full">
          2
        </div>
      </div>
    </header>
  );
};

export default NavBar;
