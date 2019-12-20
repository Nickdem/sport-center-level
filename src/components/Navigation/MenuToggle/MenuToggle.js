import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
  const cls = [
    classes.MenuToggle
  ]

  if (props.isOpen) {
    cls.push(classes.menuEx)
  } else {
    cls.push(classes.menuOp)
  }


  return (
    <div
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )
}

export default MenuToggle
