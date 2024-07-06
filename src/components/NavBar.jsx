import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" className="w-16" />
      </div>
      <nav>
        <ul>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
