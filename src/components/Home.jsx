import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import StoreCard from './helperComponents/StoreCard';
import Filter from './helperComponents/Filter';
function Home({queryWarehouse, setQueryWareHouse,setSearchBarFlag}) {

    const warehouses = useSelector((state) => state.warehouses);

    useEffect(()=>{
      setSearchBarFlag(true)
    },[])
    
  return (
    <div>
      <Filter queryWarehouse={queryWarehouse} setQueryWareHouse={setQueryWareHouse}/>
        <div style={{display:"flex", justifyContent:"center",flexWrap:"wrap"}}>

          {/* mapping upon the data we have */}
        {queryWarehouse.length>0? queryWarehouse.map(store=>{
            return <StoreCard key={store.id} store={store}/>
        }):warehouses.map(store=>{
          return <StoreCard key={store.id} store={store}/>
      })}
        </div>
    </div>
  )
}

export default Home