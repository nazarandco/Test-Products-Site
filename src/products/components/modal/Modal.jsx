import React from 'react';
import { postNewProduct, fetchProducts } from '../../productsGateway';

const Modal = ({ modalHandle, setUpdatedProdList }) => (
  <div className='modal'>
    <div className='modal__window'>
      <span className='modal__window-question'>
        Do you want to add a new product ?
      </span>
      <button
        className='modal__window-btn-add'
        onClick={() => {
          postNewProduct();
          fetchProducts();
          modalHandle();
          setUpdatedProdList();
        }}
      >
        Add
      </button>
      <button
        className='modal__window-btn-cancel'
        onClick={() => modalHandle()}
      >
        Cancel
      </button>
    </div>
  </div>
);

export default Modal;
