import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWarehouses } from "./store/actions/wareHouseActions";
import { fetchWarehouseData } from "./utils/fetchData"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import StoreDetails from "./components/StoreDetails";
import Navbar from "./components/helperComponents/Navbar";
import loader from './assets/images/tube-spinner.svg'
import './assets/css/App.css'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // const warehouses = useSelector((state) => state.warehouses);
  // console.log(warehouses);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWarehouseData(); // Use the data-fetching function
        dispatch(fetchWarehouses(data));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching warehouses:", error);
        setIsLoading(false);
      }
    };

    fetchData(); // Call the fetchData function when the component using this hook mounts.
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {isLoading ? <div className="loaderDiv"><img src={loader} alt="Loading..." width={70} height={70} /></div> :
      <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storedetails/:id" element={<StoreDetails />} />
        </Routes>
      </Router>
      </>
}
      {/* You can render your application components here */}
    </>
  );
}

export default App;
