import React, {Component} from 'react'
import classes from './Header.module.css'
import MenuToggle from '../../Navigation/MenuToggle/MenuToggle'
import Drawer from '../../Navigation/Drawer/Drawer'

class Header extends Component {

  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <div className={classes.Header}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
        />
        <div className={classes.LogoImg}></div>
      </div>
    )
  }
}

export default Header
