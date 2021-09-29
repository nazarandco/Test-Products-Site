import { LIST_RECIEVED, UPDATE_SORT } from './products.actions';

const initialState = {
  productsList: null,
  sortText: '-',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_RECIEVED: {
      return {
        ...state,
        productsList: action.payload.productsList,
      };
    }
    case UPDATE_SORT: {
      const { newSortText } = action.payload;
      return {
        ...state,
        sortText: newSortText,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
