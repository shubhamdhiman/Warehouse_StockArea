

import React, { useEffect, useState } from "react";
import "../assets/css/storeDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UpdateInput from "./helperComponents/UpdateInput";
import { updateWarehouse } from "../store/actions/wareHouseActions";

function StoreDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState("");
  const { id } = useParams();
  const warehouses = useSelector((state) => state.warehouses);
  const [updateData,setUpdatedData] = useState({
    name:"",city:"",cluster:"",space_available:"",is_live:""
  })
  // console.log(updateData)
  function handleBack() {
    navigate("/");
  }

  useEffect(() => {
    const filterItem = warehouses.filter((item) => item.id === parseInt(id));
    setItem(filterItem[0]);
  }, [warehouses, id]);

  // Function to dynamically render object properties
  const renderProperties = (object) => {
    return Object.keys(object).map((key) => (
      <div key={key}>
        <p>{key}:</p>
        <span>{object[key]===true?"Yes":object[key]===false?"No":object[key]}</span>
      </div>
    ));
  };


  function updateEditedData(id) {
    // Find the warehouse item by its id
    const warehouseToUpdate = warehouses.find((item) => item.id === parseInt(id));
    Object.keys(updateData).map((key)=>{
      if(updateData[key]===""){
        return;
      }
      if(updateData[key]!==""){

        warehouseToUpdate[key] = updateData[key]
      }
    })
    dispatch(updateWarehouse(warehouseToUpdate))
    setIsModalOpen(false)
    
    // Ensure the warehouse item exists
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div className="storeContainer">
      <div className="block">
        <button className="backButton" onClick={handleBack}>
          <i className="fa-solid fa-backward" style={{ color: "#000000" }}></i> Back
        </button>
        <div className="detailsContainer">
          {item && renderProperties(item)}
        </div>
        <button className="backButton" onClick={()=>setIsModalOpen(true)}>
        <i className="fa-solid fa-pen-to-square" style={{color: "#000000"}}></i> Edit
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="overlay"></div> {/* Add an overlay div */}
          <div className="modal">
            <div className="modal-content">
              <h2>Edit Details</h2>

              <UpdateInput data={item?.name} val="name" updateData={updateData} setUpdatedData={setUpdatedData}/>
              <UpdateInput data={item?.city} val="city" updateData={updateData} setUpdatedData={setUpdatedData}/>
              <UpdateInput data={item?.cluster} val="cluster" updateData={updateData} setUpdatedData={setUpdatedData}/>
              <UpdateInput data={item?.space_available} val="space_available" updateData={updateData} setUpdatedData={setUpdatedData}/>
              <UpdateInput data={item?.is_live} val="is_live" updateData={updateData} setUpdatedData={setUpdatedData}/>

              <div style={{marginTop:"1rem"}}>
                <button className="addData" onClick={()=>updateEditedData(item.id)}>Update</button>
                <button className="closeButton" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StoreDetails;
