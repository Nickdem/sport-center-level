import React, {Component} from 'react'
import classes from './Drawer.module.css'
import {NavLink} from 'react-router-dom'

const links = [
  {to: '/', label: 'Главная', exact: true},
  {to: '/trend', label: 'Направления', exact: false},
  {to: '/subscription', label: 'Абонементы', exact: false},
  {to: '/triallesson', label: 'Пробное занятие', exact: false}
]

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const cls = [classes.Drawer]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            { this.renderLinks() }
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Drawer
