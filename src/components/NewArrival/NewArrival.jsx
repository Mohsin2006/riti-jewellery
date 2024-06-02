import React from 'react'
import "./NewArrival.css"
import Card from '../Card/Card'
const NewArrival = () => {
  return (
    <>
    <div className='new text-center mt-5 fs-1'>
      <div>
      <h1>New Arrivals</h1>
      <p className='fs-5' style={{color:"#222222"}}>This season's most loved, customer favorite designs - curated just for you!</p>
      </div>
     
      <hr style={{height:"3px",color:"#490607",marginTop:"22px", backgroundColor:"#410708"}}/>
    
      <div className="card-container">
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

export default NewArrival
