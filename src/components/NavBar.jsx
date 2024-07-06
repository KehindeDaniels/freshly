import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io"; // Three-line menu icon

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile drawer visibility

  const links = [{ name: "Link 1" }, { name: "Link 2" }, { name: "Link 3" }];

  return (
    <header className="flex items-center justify-between">
      <div className="logo">
        <img src={logo} alt="logo" className="w-20" />
      </div>
      <nav className="flex justify-between items-center gap-8">
        <IoMdMenu
          className="w-8 h-8 block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />{" "}
        {/* Toggle visibility */}
        {/* Always show on desktop */}
        <ul className="flex gap-4 hidden lg:flex">
          {links.map((link) => (
            <Link key={link.name} to={link.to}>
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="cart relative flex">
          <FaShoppingCart className="relative w-8 h-8" />
          <div className="cartNumber absolute bottom-1/2 left-1/2 flex-1 flex justify-center items-center bg-green-400 text-white w-6 h-6 rounded-full">
            2
          </div>
        </div>
      </nav>
      {/* Mobile drawer logic */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
            <button className="p-4" onClick={() => setIsOpen(false)}>
              Close
            </button>
            {links.map((link) => (
              <Link
                key={link.name}
                className="block p-4 border-b"
                // to={link.to}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
