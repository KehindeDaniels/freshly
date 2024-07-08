import React from "react";

const Footer = () => {
  return (
    <div className=" flex gap-8 flex-col justify-center items-center  text-center bg-gray-800 text-white p-8">
      <div className="links text-center flex flex-col gap-4 md:flex-row ">
        <p>About</p>
        <p>Help</p>
        <p>Contact</p>
        <p>FAQ</p>
      </div>
      <p>Freshly inc.2024</p>
    </div>
  );
};

export default Footer;
