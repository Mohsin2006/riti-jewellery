import React from 'react';
import "./ShopByCategory.css";
import NewCard from '../NewCard/NewCard';

const ShopByCategory = () => {
  return (
    <div className='categories'>
      <h1 style={{color:"#921618"}}>Shop By Category</h1>
      <p className='fs-5' style={{color:"#222222"}}>
        Browse through your favorite categories. We've got them all!
      </p>
      <hr style={{height:"3px", color:"#490607", marginTop:"22px", backgroundColor:"#410708"}}/>
      
      <div className='category'>
        <NewCard/>
        <NewCard/>
        <NewCard/>
        <NewCard/>
        <NewCard/>
        <NewCard/>
        <NewCard/>
        <NewCard/>
      </div>
    </div>
  );
}

export default ShopByCategory;
