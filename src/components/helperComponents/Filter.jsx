import React, { useState } from "react";
import "../../assets/css/filter.css";
function Filter() {
  const [selectedFilter, setSelectedFilter] = useState(""); // State to hold the selected filter
  const [filterItems, setFilterItems] = useState([]); // State to hold selected filter items

  // Options for the dropdown
  const filterOptions = ["City", "Cluster", "Space Available"];

  // Handle selecting a filter option
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  // Handle applying the filter
  const handleFilterApply = () => {
    if (selectedFilter) {
      // Check if the selected filter is not already in the filterItems list
      if (!filterItems.includes(selectedFilter)) {
        // Add the selected filter to the filter items list
        setFilterItems([...filterItems, selectedFilter]);
      }
    }
  };

  // Handle removing a filter item
  const handleRemoveFilter = (item) => {
    const updatedFilterItems = filterItems.filter((filter) => filter !== item);
    setFilterItems(updatedFilterItems);
  };

  return (
    <div className="filterSection">
      <div className="filter-items-container">
        <div className="filter-items">
          {filterItems.map((item) => (
            <div key={item} className="filter-item">
              {item}
              <button className="filter-item-button" onClick={() => handleRemoveFilter(item)}><i className="fa-solid fa-xmark" style={{color: "#000000"}}></i></button>
            </div>
          ))}
        </div>
      </div>
      <div className="filter-dropdown-container">
        <select className="dropdown" onChange={handleFilterChange} value={selectedFilter}>
          <option value="">Select Filter</option>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className="filter-button" onClick={handleFilterApply}>Apply Filter</button>
      </div>
    </div>
  );
}

export default Filter;
