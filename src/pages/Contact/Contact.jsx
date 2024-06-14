// components/ProductList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchProducts from "../../redux/action/action";

const ProductList = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Check if products is an array before using map
  if (!Array.isArray(products)) {
    return <p>Products data is not an array.</p>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
