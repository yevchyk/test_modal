import React from 'react'
import css from './Content.module.scss'
import classnames from 'classnames'

const Content = ({children}) => {
  return (
    <div className={classnames(css.wrapper, 'container')}>
      {children}
    </div>
  )
}

export default Content