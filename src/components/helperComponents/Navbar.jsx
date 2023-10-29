import React from "react";
import "../../assets/css/navbar.css";
import logo from "../../assets/images/stock.png";
function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" width={70} height={70} />

      <div className="searchBar">
        <input className="input" type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

export default Navbar; // Ensure you have this export statement
