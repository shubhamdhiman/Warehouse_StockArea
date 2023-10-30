
import React, { useState, useEffect } from "react";
import "../../assets/css/navbar.css";
import logo from "../../assets/images/stock.png";
import { useSelector } from "react-redux";

function Navbar({ setQueryWareHouse, searchBarFlag }) {
  const [inputData, setInputData] = useState("");
  const warehouses = useSelector((state) => state.warehouses);

  // Using useEffect to perform actions when inputData changes
  useEffect(() => {
    let queryData = warehouses.filter((warehouse) =>
      warehouse.name.toLowerCase().includes(inputData.toLowerCase())
    );
    setQueryWareHouse(queryData)
  }, [inputData]);

  function handleInputChange(val) {
    setInputData(val);
  }

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" width={70} height={70} />

      <div className="searchBar">
        {
          searchBarFlag && <input
          className="input"
          type="text"
          placeholder="Search..."
          value={inputData}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        }
      </div>
    </div>
  );
}

export default Navbar;
