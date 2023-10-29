// src/actions/warehouseActions.js

export const fetchWarehouses = (data) => {
    return {
      type: 'FETCH_WAREHOUSES',
      payload: data,
    };
  };
  
  export const updateWarehouse = (data) =>{
    return{
      type:"UPDATE_WAREHOUSE",
      payload:data
    }
  }