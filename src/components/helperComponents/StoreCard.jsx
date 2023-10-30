import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/store_card.css";
import { useSelector, useDispatch } from "react-redux";
import { updateWarehouse } from "../../store/actions/wareHouseActions";
import {Toaster} from 'react-hot-toast'
import { storeUpdated } from "../../utils/toastFile";

function StoreCard({ store }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const warehouses = useSelector((state) => state.warehouses);
  const [formData, setFormData] = useState({
    fieldName:"",
    fieldValue:""
  })
  const navigate = useNavigate();


  function addData(id) {
    // Finding the warehouse item by its id
    const warehouseToUpdate = warehouses.find((item) => item.id === parseInt(id));
  
    // Ensuring the warehouse item exists
    if (warehouseToUpdate) {
      // Creating a copy of the found item and update the specific field
      const updatedItem = { ...warehouseToUpdate };
      updatedItem[formData.fieldName] = formData.fieldValue;
  
      // Dispatching the updated item
      dispatch(updateWarehouse(updatedItem));
      storeUpdated(`${store.name} Value`)
    }
  
    setIsModalOpen(false);
    setFormData({ fieldName: "", fieldValue: "" });
  }
  
  function handleCardClick(id) {
    navigate(`/storedetails/${id}`);
  }

  function handleAddClick(e) {
    e.stopPropagation();
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button
        onClick={() => handleCardClick(store.id)}
        className="storeCard-button"
        style={
          store.is_live
            ? { outlineColor: "rgb(0, 156, 16)", backgroundColor: "#c8ffc6" }
            : { outlineColor: "red", backgroundColor: "#ffd7d7" }
        }
      >
        <div className="storeCard-locationStatus">
          <p className="city">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#ff0000" }}
            ></i>
            {store.city}
          </p>
          <p>
            {store.is_live ? (
              <div className="status">
                <p className="">Live</p>
                <div className="statusLive"></div>
              </div>
            ) : (
              <div className="status">
                <p className="">Closed</p>
                <div className="statusClose"></div>
              </div>
            )}
          </p>
        </div>
        <p className="storeCard_name">{store.name}</p>
        <div className="storeCard_space">
          Space: <span>{store.space_available}</span>
        </div>
        <div className="storeCard_buttonSection">
          <button onClick={(e) => handleAddClick(e)} className="addButton">
            Add
          </button>
        </div>
      </button>
      {isModalOpen && (
        <>
          <div className="overlay"></div> 
          <div className="modal">
            <div className="modal-content">
              <h2>Add Details</h2>
              <p>{store.name}</p>

              <input
                type="text"
                placeholder="Field Name"
                style={{ margin: ".5rem" }}
                name="fieldName"
                value={formData.fieldName}
                onChange={(e)=>setFormData({...formData,fieldName:e.target.value})}
              />
              <input
                type="text"
                placeholder="Field Value"
                name="fieldValue"
                value={formData.fieldValue}
                onChange={(e)=>setFormData({...formData,fieldValue:e.target.value})}
                style={{ margin: ".5rem" }}
              />
              <div>
                <button className="addData" onClick={()=>addData(store.id)}>Add</button>
                <button className="closeButton" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <Toaster />
    </>
  );
}

export default StoreCard;
