import React from 'react'
import "./Sidebar.css"
import add_icon from "../../assets/add_icon.png"
import order_icon from "../../assets/order_icon.png"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='add'>
      <img src={add_icon} alt="" />
        <p href="">Add</p>
      </div>
      <div className='add'>
      <img src={order_icon} alt="" />
        <p href="">List</p>
      </div>
      <div className='add'>
      <img src={order_icon} alt="" />
        <p href="">Orders</p>
      </div>
    </div>
  )
}

export default Sidebar
