import React from 'react';
import "./Sidebar.css";
import add_icon from "../../assets/add_icon.png";
import order_icon from "../../assets/order_icon.png";
import { NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <NavLink to="/add"  className='add' style={{textDecoration:"none"}}>
        <img src={add_icon} alt="" />
        <p>Add</p>
      </NavLink>
      <NavLink to="/list" className='add' style={{textDecoration:"none"}}>
        <img src={order_icon} alt="" />
        <p>List</p>
      </NavLink>
      <NavLink to="/orders" className='add' style={{textDecoration:"none"}}>
        <img src={order_icon} alt="" />
        <p>Orders</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
