import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[1500px]  mx-auto p-4 sm:p-8 min-h-dvh">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
