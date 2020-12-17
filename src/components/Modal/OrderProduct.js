import React, { useState } from 'react';
import { connect } from 'react-redux';
import css from './OrderProduct.module.scss';
import Button from '../Button';

function OrderProduct({ product }) {
  const [value, setValue] = useState({
    name: '',
    price: 0,
    amount: 0,
  })

  function handleAddProduct () {
    console.log(value)
  }

  function onChangeValue(newValue, key) {
    setValue({
      ...value,
      [key]: newValue,
    })
  }

  return (
    <div className={css.container}>
      <p className={css.category}>{product.category}</p>
      <p className={css.productName}>{product.name}</p>
      <div className={css.price}><span className={css.dolar}>$ </span>{product.price}</div>
      <Button handleClick={e=> openModal(product)} label='order' className={css.button}/>
    </div>
  );
}

const mapStateToProps = ({ tools }) => ({
  product: tools.modal.data,
});

export default connect(mapStateToProps)(OrderProduct)