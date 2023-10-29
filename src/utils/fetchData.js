
import axios from 'axios';

// Function to fetch warehouse data from the API
export const fetchWarehouseData = async () => {
  try {
    const response = await axios.get("https://my-json-server.typicode.com/shubhamdhiman/stockareadata/data"); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching warehouses:', error);
    throw error;
  }
};
