import React from 'react'
import classnames from 'classnames'
import arrow from '../../icons/arrow.svg'
import css from './Button.module.scss'

const Button = ({
  className,
  btnStyle = 'buttonOutlined',
  label = '',
  handleClick,
}) => {

  return (
    <div
      className={classnames(css.button, className, {
        [css.buttonOutlined]: btnStyle === 'buttonOutlined',
        [css.buttonFilled]: btnStyle === 'buttonFilled',
        [css.withArrow]: btnStyle === 'withArrow'
      })}
      onClick={handleClick}>
          { label }
          {btnStyle === 'withArrow' &&
            <img
              src={arrow}
              className={classnames(css.icon)}
              alt="arrow"/>
          }
    </div>
  )
}

export default React.memo(Button)
