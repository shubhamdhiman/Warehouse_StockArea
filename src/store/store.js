import { createStore } from "redux";
import warehouseReducer from "./reducer/wareHouseReducers";
// import { combineReducers } from "redux";

// Using CombineReducers to use multiple reducers 
// const result = combineReducers({
//     dataR : dataReducer,
//     pageR : pageReducer,
// })

// Creating the store
export const store = createStore(warehouseReducer)