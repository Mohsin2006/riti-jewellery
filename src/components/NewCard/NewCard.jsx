import React from 'react'
import c_ring from "../../assets/c_rings.jpeg"
import "./NewCard.css"
const NewCard = () => {
    return (
        <div className="card" style={{ width: '15rem' }}>
          <img src={c_ring} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">C Earring</h5>
            <p className="card-text">
              $100
            </p>
            <a href="#" className="btn btn-primary">Add To Cart</a>
          </div>
        </div>
      );
}

export default NewCard
