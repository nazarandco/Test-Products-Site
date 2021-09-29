import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as productsActions from '../../products.actions';
import Modal from '../modal/Modal.jsx';

const Header = ({ updateSort, setUpdatedProdList }) => {
  const [isModal, setModal] = useState(false);

  return (
    <>
      <header className='header'>
        <h1 className='header__text'>
          <span>Test Program</span>
        </h1>
        <div className='header__btns'>
          <button
            className='header__btns-sort'
            onClick={() => updateSort('Name')}
          >
            <span>Sort by Name</span>
          </button>
          <button
            className='header__btns-sort'
            onClick={() => updateSort('Quantity')}
          >
            <span>Sort by Quantity</span>
          </button>
          <button
            className='header__btns-prod-btn'
            onClick={() => setModal(!isModal)}
          >
            <span>New Product</span>
          </button>
        </div>
      </header>
      {isModal ? (
        <Modal
          modalHandle={setModal}
          setUpdatedProdList={() => setUpdatedProdList()}
        />
      ) : null}
    </>
  );
};

const mapDispatch = {
  updateSort: productsActions.updateSort,
};

export default connect(null, mapDispatch)(Header);
