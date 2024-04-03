import React from "react";

const Navbar = () => {
  return (
    <div className="w-full backdrop-blur-0 bg-black text-white flex items-center justify-between p-5 h-full  px-10   z-10 font-poppins  ">
      <h1 className="text-lg font-extrabold tracking-wider bg-gradient-to-r from-red-500 to-orange-500  text-transparent bg-clip-text">
        PhotoRehab
      </h1>

      <div className="flex justify-center px-5  py-3  border-slate-700 border-2 rounded-full text-sm   ">
        <h1 className="text-center">Log In / Sign Up</h1>
      </div>
    </div>
  );
};

export default Navbar;
