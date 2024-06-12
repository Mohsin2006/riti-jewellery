import "./Cart.css"
import apple_earring from "../../assets/apple_earring.jpeg"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate=useNavigate()
  return (
<div className='cart'>
  <div className="cart-headings">
    <ul className='ul'>
      <li>Item</li>
      <li>Title</li>
      <li>Price</li>
      <li>Quantity</li>
      <li>Total</li>
      <li>Remove</li>
    </ul>
  </div>
  <hr style={{border:"1px solid gray"}}/>
  <div className="cart-content">
    <ul className='ul'>
      <li><img src={apple_earring} alt="" /></li>
      <li>Finger Ring</li>
      <li>$12</li>
      <li>2</li>
      <li>$24</li>
      <li>X</li>
    </ul>
  </div>
  <hr  style={{border:"1px solid gray"}}/>

  <div className="rates d-flex justify-content-between " style={{listStyle:"none"}}>
  <div className="right w-50 pl-5 pr-5"  >
  <h1 style={{color:"brown"}}>CART TOTAL</h1>
  <div className="subtotal d-flex justify-content-between">
    <li>Sub Total</li>
    <li>$ 99</li>
  </div>
  <hr />
  <div className="subtotal d-flex justify-content-between">
    <li>Delivery Fee</li>
    <li>$ 2</li>
  </div>
  <hr />
  <div className="subtotal d-flex justify-content-between">
    <li>Total</li>
    <li>$ 101</li>
  </div>
  <button className='brown l text-white rounded p-2 mt-2 ' onClick={()=>{navigate("/info")}}>PROCEED TO CHECKOUT</button>
 </div>
<hr />
 <div className="left mx-5">
  <p>If You have a promocode Enter it here</p>
  <li><input type="text" placeholder='Enter here'/> <button  className='brown l text-white rounded p-2 mt-2'>SUBMIT</button></li>
 </div>
  </div>
</div>
  )
}

export default Cart
