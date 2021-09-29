import React from 'react';
import { Link } from 'react-router-dom';
import { deleteProduct, fetchProducts } from '../../productsGateway';

const Product = ({
  imageURL,
  name,
  description,
  count,
  id,
  setUpdatedProdList,
}) => (
  <div className='product'>
    <img src={imageURL} alt='Some product' className='product__img' />
    <div className='product__text'>
      <span className='product__text-name'>{name}</span>
      <span className='product__text-count'>{`Available: ${count
        .toString()
        .slice(3)}`}</span>
    </div>
    <p className='product__description'>{description}</p>
    <div className='product__btns'>
      <Link to={`/:${id}`}>
        <button className='product__btns-details'>Details</button>
      </Link>
      <button
        className='product__btns-delete'
        onClick={() => {
          deleteProduct(id);
          fetchProducts();
          setUpdatedProdList();
        }}
      >
        Delete
      </button>
    </div>
  </div>
);

export default Product;
