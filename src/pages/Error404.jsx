import React, { useState } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  const [count, setCount] = useState(5);
  const [showButton, setShowButton] = useState(false);

  useState(() => {
    const id = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 0) {
          clearInterval(id);
          setTimeout(() => setShowButton(true), 1000); // Set button to appear 2 seconds after countdown finishes
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
  });

  return (
    <div className="bg-black text-white h-screen flex   items-center justify-center">
      <div className="p-4 flex flex-col justify-center items-center my-auto h-96 max-w-96 mx-auto bg-gray-900 rounded-lg bg-opacity-70 opacity-80">
        <h1 className="text-3xl mb-4 font-bold">Dear Mentor,</h1>
        <h1 className="text-lg font-normal text-center">
          {`Welcome to the darkweb 🩻, you have ${count} seconds to leave or else you will be initiated`}
        </h1>
        <p className="text-2xl mt-5">{count}</p>
        {count === 0 && (
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl mt-5">Why didn't you leave ?</p>
            {showButton && (
              <Link to={".."}>
                <button className="mt-5 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition duration-100">
                  Leave Now
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Error404;
