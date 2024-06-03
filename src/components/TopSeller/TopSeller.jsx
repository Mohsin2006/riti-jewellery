import React from 'react'
import "./TopSeller.css"
import Card from '../Card/Card'
import TopSellerCard from '../TopSellerCard/TopSellerCard'
const TopSeller = () => {
  return (
    <>
     <div className='top-seller text-center mt-5 fs-1'>
      <h1 style={{color:"#921618"}}>Top Seller</h1>
      <p className='fs-5' style={{color:"#222222"}}>Love the most to bought the most</p>
      <hr style={{height:"3px",color:"#490607",marginTop:"22px", backgroundColor:"#410708"}}/>
    
  <div className='top '>
 <TopSellerCard/>
 <TopSellerCard/>
 <TopSellerCard/>
 <TopSellerCard/>
 <TopSellerCard/>
 <TopSellerCard/>
 <TopSellerCard/>
 <TopSellerCard/>
 <TopSellerCard/>



  </div>
    </div>
    </>
  )
}

export default TopSeller
