import React, { useState } from 'react';
import { connect } from 'react-redux';
import css from './OrderProduct.module.scss';
import TextInput from '../TextInput'
import Button from '../Button';

function OrderProduct({ product }) {
  const [value, setValue] = useState({
    name: '',
    number: '',
  })
  
  const [validate, setvalidate] = useState()

  function handleSendProduct () {
    console.log(value)
  }

  function onChangeValue(key, newValue) {
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
      <TextInput placeholder='Name' value={value.name} onChange={onChangeValue} name='name'/>
      <TextInput type='number' placeholder='Number' value={value.number} onChange={onChangeValue} name='number'/>
      <Button handleClick={e=> handleSendProduct()} label='order' btnStyle='withArrow' className={css.button}/>
    </div>
  );
}

const mapStateToProps = ({ tools }) => ({
  product: tools.modal.data,
});

export default connect(mapStateToProps)(OrderProduct)