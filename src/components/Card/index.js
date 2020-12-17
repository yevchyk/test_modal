import React from 'react'
import css from './Card.module.scss'
import classnames from 'classnames'
import Button from '../Button'

const Card = ({product, openModal}) => {
  return (
    <div className={'col-lg-4 col-md-6 col-sm-12'}>
      <div className={classnames(css.card)}>
        <p className={css.category}>{product.category}</p>
        <p className={css.productName}>{product.name}</p>
        <div className="d-flex justify-content-between">
          <div className={css.price}><span className={css.dolar}>$ </span>{product.price}</div>
          <div><Button handleClick={e=> openModal(product)} label='buy' className={css.button}/></div>
        </div>
      </div>
    </div>
  )
}

export default Card
