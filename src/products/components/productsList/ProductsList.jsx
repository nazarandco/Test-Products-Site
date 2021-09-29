import React from 'react';
import Product from '../product/Product.jsx';

const ProductsList = ({ sortText, productsList, setUpdatedProdList }) =>
  productsList ? (
    <main className='products-list'>
      {productsList
        .sort((a, b) => {
          if (sortText === 'Name') {
            return a.name.localeCompare(b.name);
          }
          if (sortText === 'Quantity') {
            return a.count.toString().slice(3) - b.count.toString().slice(3);
          }
          return null;
        })
        .map((product) => (
          <Product
            {...product}
            key={product.id}
            setUpdatedProdList={setUpdatedProdList}
          />
        ))}
    </main>
  ) : null;

export default ProductsList;
