import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header.jsx';
import ProductsList from '../productsList/ProductsList.jsx';
import Product from '../product/Product.jsx';
import * as productsActions from '../../products.actions';
import * as productsSelectors from '../../products.selectors';

const Main = ({ getProductsList, productsList, sortText }) => {
  useEffect(() => getProductsList(), []);

  const [updatedProdList, setUpdatedProdList] = useState(
    !productsList ? null : productsList
  );

  return (
    <>
      <Header
        setUpdatedProdList={() => {
          const newProdList = getProductsList();
          setUpdatedProdList(newProdList);
        }}
      />
      <ProductsList
        sortText={sortText}
        productsList={!updatedProdList ? productsList : updatedProdList}
        setUpdatedProdList={() => {
          const newProdList = getProductsList();
          setUpdatedProdList(newProdList);
        }}
      />
    </>
  );
};
const mapDispatch = {
  getProductsList: productsActions.getProductsList,
};

const mapState = (state) => ({
  productsList: productsSelectors.productsListSelector(state),
  sortText: productsSelectors.filterTextSelector(state),
});

export default connect(mapState, mapDispatch)(Main);
