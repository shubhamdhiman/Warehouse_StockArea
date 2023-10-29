
const initialState = {
    warehouses: [],
};

const warehouseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_WAREHOUSES':
        return {
          ...state,
          warehouses: action.payload,
        };
      case 'UPDATE_WAREHOUSE':
        // Find the index of the warehouse to be updated
        const updatedIndex = state.warehouses.findIndex(
          (warehouse) => warehouse.id === action.payload.id
        );
  
        // Ensure the warehouse with the given id exists
        if (updatedIndex === -1) {
          return state; // No change if the id is not found
        }
  
        // Create a copy of the state and update the specific warehouse item
        const updatedWarehouses = [...state.warehouses];
        updatedWarehouses[updatedIndex] = action.payload;
  
        return {
          ...state,
          warehouses: updatedWarehouses,
        };
      default:
        return state;
    }
};

export default warehouseReducer;
  