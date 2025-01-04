import React from "react";

const CerButton = () => {
  return (
    <div className="relative hover:scale-105 rounded-full bg-gradient-to-r from-unactive to-active transition-all duration-400 ease-in-out group">
      <button className="text-dark1 bg-active font-semibold text-base md:text-lg px-4 py-2 rounded-full shadow-md hover:shadow-md focus:outline-none">
        Show Credentials
      </button>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-unactive to-active blur-none transition-all duration-400 ease-in-out group-hover:blur-md group-active:blur-sm -z-10"></div>
    </div>
  );
};

export default CerButton;
