import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductComponent from '../../components/Product/index';
import { setProducts } from '../../redux/actions/ProductActions';
import { fetchAllProducts } from './network';

const ProductListing = () => {
  let dispatch = useDispatch();
  useEffect(async () => {
    let data = await fetchAllProducts();
    dispatch(setProducts(data));
  }, []);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
