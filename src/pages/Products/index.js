import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../../actions/products'
import {setModal} from '../../actions/tools'
import Card from '../../components/Card'
import Button from '../../components/Button'
import css from './Products.module.scss'

const Products = () => {
  const products = useSelector(state => state.products.productsList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  function orderCheaper() {
    const chipest = products.reduce((chipest, product, index) => 
      !index 
        ? product.price
        : chipest.price < product.price ? chipest : product)
    openModal(chipest)
  }

  function openModal(item) {
    dispatch(setModal(true, 'order_product', item))
  }

  return (
    <>
      <div className="row justify-content-center">
        {
          products.map((item, key)=> <Card product={item} key={key} openModal={openModal}/>)
        }
      </div>
      {!!products.length && <Button handleClick={orderCheaper} label='Buy cheapest' btnStyle='buttonFilled' className={css.button}/>}
    </>
  )
}

export default Products
