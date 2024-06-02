import React from 'react'
import "./Navbar.css"
import logos from "../../assets/logos.jpg"
import phoneicon from "../../assets/phone-icon.png"
import account from "../../assets/account.png"
import cart_icon from "../../assets/cart_icon.png"


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logos} alt="" />
        
        <div className="centers">
            <input type="text" placeholder='Search for Gold Ornaments'/>
        </div>
        <div className="left">
            <ul>
                <div className='k'>
                <img src={account} alt="" />
                <li>Home</li>
                </div>
                <div className='k'>
                <img src={phoneicon} alt="" />
                <li>Contact</li>
                </div>
                <div className='k'>
                <img src={account} alt="" />
                <li>Account</li>
                </div>
                <div className='k'>
                    <img src={cart_icon} alt="" />
                    <li>Cart</li>
                </div>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar
