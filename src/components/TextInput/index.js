import React from 'react'
import classnames from 'classnames'
import css from './TextInput.module.scss'

const TextInput = ({clearAll, type='text', onChange, name, className, errorMessage, status='usual', ...props}) => {

  return (
    <>
      <input
        onChange={e=>
          type === 'number'
          ? Number.isInteger(e.target.value/1) && onChange(name, e.target.value)
          : onChange(name, e.target.value)}
        className={classnames(css.input, className, {
          [css.success]: status === 'success',
          [css.error]: status === 'error',
        })}
        type='text'
        {...props}/>
        {status !== 'error' && <p className={css.errorMessage}>{errorMessage}</p>}
    </>
  )
}

export default React.memo(TextInput)
