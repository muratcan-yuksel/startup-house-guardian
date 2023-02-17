import React from "react";
import logo from "../assets/startuphouselogo.png";

const Header = () => {
  return (
    <div className="bg-[#f4f5f6] shadow-[3px_0_6px_0_#c9ced5] p-5">
      <img className="h-10 mr-7" src={logo} alt="" />
    </div>
  );
};

export default Header;
