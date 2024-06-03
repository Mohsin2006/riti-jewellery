import React from 'react'
import "./Header.css"
import girl_banner from "../../assets/girl_banner.jpeg"
const Header = () => {
  return (
    <div className='header'>
      <div className='images'>
        <img src={girl_banner} alt="" />
      </div>
    </div>
  )
}

export default Header
