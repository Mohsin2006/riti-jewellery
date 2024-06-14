// actions/productActions.js
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from './actionTypes';
  
  export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
  });
  
  export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  });
  
  export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  });
  
  const fetchProducts = () => {
    return (dispatch) => {
      dispatch(fetchProductsRequest());
      fetch('http://localhost:4000/api/product/listproduct')
        .then(response => response.json())
        .then(data => dispatch(fetchProductsSuccess(data)))
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  };
  export default fetchProducts;
  