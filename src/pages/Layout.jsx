import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="max-w-[1500px]  mx-auto md:px-4 min-h-dvh">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
