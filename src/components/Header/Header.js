import React, {useState} from 'react'
import classes from './Header.module.css'
import MenuToggle from '../Navigation/MenuToggle/MenuToggle'
import Drawer from '../Navigation/Drawer/Drawer'

const Header = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className={classes.Header}>
      <MenuToggle
        onToggle={() => setMenu(!menu)}
        isOpen={menu}
      />
      <Drawer
        isOpen={menu}
        onClose={() => setMenu(false)}
      />
      <div className={classes.LogoImg}></div>
    </div>
  )
}

export default Header
