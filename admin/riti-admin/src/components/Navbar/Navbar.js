import React from 'react'
import "./Navbar.css"
import logos from "../../assets/logos.jpg"
import profile_image from "../../assets/profile_image.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logos} alt="" />
      <h1>Riti Jewellery</h1>
      <img src={profile_image} alt="" />
    </div>
  )
}

export default Navbar
