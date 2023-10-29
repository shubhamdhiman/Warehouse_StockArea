import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/store_card.css";
import { useSelector, useDispatch } from "react-redux";
import { updateWarehouse } from "../../store/actions/wareHouseActions";
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
    // Find the warehouse item by its id
    const warehouseToUpdate = warehouses.find((item) => item.id === parseInt(id));
  
    // Ensure the warehouse item exists
    if (warehouseToUpdate) {
      // Create a copy of the found item and update the specific field
      const updatedItem = { ...warehouseToUpdate };
      updatedItem[formData.fieldName] = formData.fieldValue;
  
      // Dispatch the updated item
      dispatch(updateWarehouse(updatedItem));
    }
  
    setIsModalOpen(false);
    setFormData({ fieldName: "", fieldValue: "" });
  }
  

  function handleCardClick(id) {
    console.log("clicked on card");
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
          <div className="overlay"></div> {/* Add an overlay div */}
          <div className="modal">
            <div className="modal-content">
              <h2>Add Details</h2>
              <p>{store.name}</p>

              {/* Additional form fields or content can be added here */}
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
    </>
  );
}

export default StoreCard;
