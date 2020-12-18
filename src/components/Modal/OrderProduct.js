import React, { useState } from 'react';
import { connect } from 'react-redux';
import css from './OrderProduct.module.scss';
import TextInput from '../TextInput'
import Button from '../Button';
import { validateName, validateNumber } from '../../helpers/serviceFunctions'

function OrderProduct({ product }) {
  const [value, setValue] = useState({
    name: '',
    number: '',
  })
  
  const [validate, setValidate] = useState({
    name: {
      errorMessage: '',
      status: 'usual'
    },
    number: {
      errorMessage: '',
      status: 'usual'
    },
  })

  function handleSendProduct () {
    setValidatedNumber()
    setValidatedName()
    if (Object.values(validate).some(item => item.status === 'error')) {
      console.error(value);
    }else {
      console.log(value)
    }
  }

  function onChangeValue(key, newValue) {
    setValue({
      ...value,
      [key]: newValue,
    })
    setValidate({
      ...validate,
      [key]: {
        errorMessage: '',
        status: 'usual'
      }
    })
  }

  function setValidatedNumber() {
    setValidate({
      ...validate,
      number: validateNumber(value.number)
    })
  }

  function setValidatedName() {
    setValidate({
      ...validate,
      name: validateName(value.name)
    })
  }

  function clearData(key) {
    setValue({
      ...value,
      [key]: '',
    })
    setValidate({
      ...validate,
      [key]: {
        errorMessage: '',
        status: 'usual'
      },
    })
  }

  return (
    <div className={css.container}>
      <p className={css.category}>{product.category}</p>
      <p className={css.productName}>{product.name}</p>
      <div className={css.price}><span className={css.dolar}>$ </span>{product.price}</div>
      <TextInput 
        placeholder='Name'
        value={value.name}
        onChange={onChangeValue}
        clearData={clearData}
        onBlur={setValidatedName}
        name='name'
        {...validate.name}/>
      <TextInput 
        type='number'
        placeholder='Number'
        value={value.number}
        clearData={clearData}
        onChange={onChangeValue}
        onBlur={setValidatedNumber}
        name='number'
        {...validate.number}/>
      <Button handleClick={handleSendProduct} label='order' btnStyle='withArrow' className={css.button}/>
    </div>
  );
}

const mapStateToProps = ({ tools }) => ({
  product: tools.modal.data,
});

export default connect(mapStateToProps)(OrderProduct)