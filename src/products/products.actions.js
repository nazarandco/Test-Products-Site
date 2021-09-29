import * as fetchProductsList from './productsGateway';

export const LIST_RECIEVED = 'PRODUCTS/LIST_RECIEVED';
export const UPDATE_SORT = 'PRODUCTS/UPDATE_SORT';

export const productsListRecieved = (productsList) => ({
  type: LIST_RECIEVED,
  payload: {
    productsList,
  },
});

export const updateSort = (sortText) => ({
  type: UPDATE_SORT,
  payload: {
    newSortText: sortText,
  },
});

export const getProductsList = () => {
  const thunkAction = function (dispatch) {
    fetchProductsList
      .fetchProducts()
      .then((productsList) => dispatch(productsListRecieved(productsList)));
  };

  return thunkAction;
};
