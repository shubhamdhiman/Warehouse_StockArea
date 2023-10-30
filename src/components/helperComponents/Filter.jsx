import React, { useState } from "react";
import "../../assets/css/filter.css";
import { useSelector } from "react-redux";

function Filter({ queryWarehouse, setQueryWareHouse }) {
  const [cityFilter, setCityFilter] = useState("");
  const [clusterFilter, setClusterFilter] = useState("");
  const [spaceAvailableFilter, setSpaceAvailableFilter] = useState(""); 
  const warehouses = useSelector((state) => state.warehouses);


  const handleRemoveFilter = ()=>{
    setCityFilter("")
    setClusterFilter("")
    setSpaceAvailableFilter("")
    setQueryWareHouse([])
  }

  const handleFilterApply = () => {
    // Converting the spaceAvailableFilter to a number (you can add validation)
    const spaceAvailableValue = parseInt(spaceAvailableFilter);

    // Filtering the data based on selected filters
    const filteredWarehouses = warehouses.filter((warehouse) => {
      return (
        warehouse.city === cityFilter ||
        warehouse.cluster === clusterFilter ||
        warehouse.space_available >= spaceAvailableValue
      );
    });

    // Appending the filtered data to queryWarehouse without duplicates
    if (queryWarehouse.length > 0) {
      const newQueryWarehouse = [...queryWarehouse];
      filteredWarehouses.forEach((filteredWarehouse) => {
        if (
          !newQueryWarehouse.some((item) => item.id === filteredWarehouse.id)
        ) {
          newQueryWarehouse.push(filteredWarehouse);
        }
      });
      setQueryWareHouse(newQueryWarehouse);
    } else {
      setQueryWareHouse(filteredWarehouses);
    }
  };

  return (
    <div className="filterSection">
      <div className="filter-dropdown-container">
        <select
          className="dropdown"
          onChange={(e) => setCityFilter(e.target.value)}
          value={cityFilter}
        >
          <option value="">Select City</option>
          {Array.from(
            new Set(warehouses.map((warehouse) => warehouse.city)).values()
          ).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          className="dropdown"
          onChange={(e) => setClusterFilter(e.target.value)}
          value={clusterFilter}
        >
          <option value="">Select Cluster</option>
          {Array.from(
            new Set(warehouses.map((warehouse) => warehouse.cluster)).values()
          ).map((cluster) => (
            <option key={cluster} value={cluster}>
              {cluster}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Space Greater Than.."
          min={0}
          value={spaceAvailableFilter}
          onChange={(e) => setSpaceAvailableFilter(e.target.value)}
        />
        <button className="filter-button" style={{marginBottom:"1rem"}} onClick={handleFilterApply}>
          Apply
        </button>
        <button className="filter-button"style={{marginBottom:"1rem"}} onClick={handleRemoveFilter}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Filter;
