import React, { useRef } from 'react'
import classnames from 'classnames'
import css from './TextInput.module.scss'
import CloseIcone from '../../icons/CloseIcone'

const TextInput = ({clearAll, type='text', onChange, clearData, name, className, errorMessage, status, ...props}) => {
  const inputRef = useRef();

  function clearDataAndFocus() {
    clearData(name)
    inputRef.current.focus();
  }

  return (
    <>
      <input
        {...props}
        ref={inputRef}
        onChange={e=>
          type === 'number'
          ? (Number.isInteger(e.target.value/1) && e.target.value.length < 13) && onChange(name, e.target.value.split(' ').join(''))
          : onChange(name, e.target.value)}
          className={classnames(css.input, className, {
            [css.success]: status === 'success',
            [css.error]: status === 'error',
          })}
          type='text'/>
        {
          status === 'error' && 
          <div className={css.close} onClick={clearDataAndFocus}>
            <CloseIcone fill='white' className="App-close" alt="close" />
          </div>
        }
        {status === 'error' && <p className={css.errorMessage}>{errorMessage}</p>}
    </>
  )
}

export default React.memo(TextInput)
