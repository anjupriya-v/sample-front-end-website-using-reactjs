import React from "react";
import Navbar from "./Navbar";
import "../cssModules/header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <Navbar />
      <div className="headerContent">
        <p>Computer Engineering</p>
        <p>142,765 Computer Engineers follow us</p>
      </div>
    </div>
  );
};
export default Header;
