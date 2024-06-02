import React from 'react'
import "./ShopByCategory.css"
import Card from '../Card/Card'
const ShopByCategory = () => {
  return (
    <>
     <div className='categories text-center mt-5 fs-1'>
      <h1>Shop By Category</h1>
      <p className='fs-5' style={{color:"#222222"}}>Browse through your favorite categories. We've got them all!</p>
      <hr style={{height:"3px",color:"#490607",marginTop:"22px", backgroundColor:"#410708"}}/>
    
  <div className='category d-flex flex-wrap justify-content-center align-items-center'>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>


  </div>
    </div>
   
    </>
  )
}

export default ShopByCategory
