import React, { useEffect, useState } from 'react'
import "./List.css"
import parcel_icon from "../../assets/parcel_icon.png"
import axios from 'axios'
const List = () => {
const [list, setList]=useState([])

const fetchList=async()=>{
return await axios.get(`http://localhost:4000/api/product/listproduct`)
.then((res)=>{
  setList(res.data.data);
  console.log(res.data.data);
}).catch((err)=>console.log(err))
}

useEffect(()=>{
fetchList()
},[])


  return (
    <div className='brown d-flex flex-column align-items-center'>
      <h1>List of Products</h1>
      <div className="list-table">
      <div className='list w-100'>
        <li><img src={parcel_icon} alt="" /></li>
        <li>Name</li>
        <li>price</li>
        <li>Category</li>
        <li>Action</li>
      </div>

      {
        list.map((item,index)=>{
          console.log(item,"...............");
          return(
            <div key={index} className="list">
           <img src={item.images} alt="" />
           <p>{item.name}</p>
           <p>{item.price}</p>
           <p>{item.category}</p>
           <p className='cursor'>X</p>

            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default List
