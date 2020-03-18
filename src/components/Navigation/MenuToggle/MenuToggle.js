import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = ({onToggle, isOpen}) => {
  const cls = [
    classes.MenuToggle
  ]

  if (isOpen) {
    cls.push(classes.menuEx)
  } else {
    cls.push(classes.menuOp)
  }


  return (
    <div
      className={cls.join(' ')}
      onClick={onToggle}
    />
  )
}

export default MenuToggle
