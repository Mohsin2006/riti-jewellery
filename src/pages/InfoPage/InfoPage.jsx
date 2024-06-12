import "./InfoPage.css"
const InfoPage = () => {
  return (
    <div className="rates d-flex justify-content-between align-items-center " style={{listStyle:"none"}}>
    <div className='del-info w-25 m-5'>
      <h1 style={{color:"brown"}}>Delivery Information</h1>
      <div className='w-100 mb-3'>
        <input className='w-50' type="name" placeholder='first name' required/>
        <input className='w-50' type="name" placeholder='last name' required/>
      </div>
      <div className='mb-3'>
        <input type="email" className='w-100' placeholder='email address' required/>
      </div>
      <div className='mb-3'>
      <input type="text" className='w-100' placeholder='street' />
      </div>
      <div className='mb-3'>
        <input className='w-50' type="city" placeholder='city'/>
        <input className='w-50' type="text" placeholder='state'/>
      </div>
      <div className='mb-3'>
        <input className='w-50' type="code" placeholder='zip code'/>
        <input className='w-50' type="text" placeholder='country'/>
      </div>
      <div className='mb-3'>
        <input className='w-100' type="text" placeholder='phone' required/>
      </div>
    </div>
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
  <button className='brown l text-white rounded p-2 mt-2 '>PROCEED TO PAYMENT</button>
 </div>

  </div>
  )
}

export default InfoPage
