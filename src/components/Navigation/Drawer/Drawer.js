import React from 'react'
import classes from './Drawer.module.css'
import {NavLink} from 'react-router-dom'

const Drawer = ({onClose , isOpen}) => {
  const links = [
    {to: '/', label: 'Главная', exact: true},
    {to: '/trend', label: 'Направления', exact: false},
    {to: '/subscription', label: 'Абонементы', exact: false},
    {to: '/triallesson', label: 'Пробное занятие', exact: false}
  ]

  const renderLinks = links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={onClose}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })

  const cls = [classes.Drawer]

  if (!isOpen) {
    cls.push(classes.close)
  }

  return (
    <React.Fragment>
      <nav className={cls.join(' ')}>
        <ul>
          { renderLinks }
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Drawer
