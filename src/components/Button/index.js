import React from 'react'
import classnames from 'classnames'
import css from './Button.module.scss'

const Button = ({
  className,
  btnStyle = 'outlined',
  label = '',
  handleClick,
}) => {

  return (
    <div
      className={classnames(css.button, className, {
        [css.buttonOutlined]: btnStyle === 'outlined',
        [css.buttonFilled]: btnStyle === 'filled',
        [css.withArrow]: btnStyle === 'withArrow'
      })}
      onClick={handleClick}
    >
      { label }
      {/* {btnStyle !== 'filled' &&
        <IconArrowRight className={classnames(css.icon, iconClassname)} />
      } */}
    </div>
  )
}

export default React.memo(Button)
