import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import StoreCard from './helperComponents/StoreCard';
import Filter from './helperComponents/Filter';
function Home() {
    const warehouses = useSelector((state) => state.warehouses);
    // console.log(warehouses)
  return (
    <div>
      <Filter />
        <div style={{display:"flex", justifyContent:"center",flexWrap:"wrap"}}>
        {warehouses.map(store=>{
            return <StoreCard key={store.id} store={store}/>
        })}
        </div>
    </div>
  )
}

export default Home