import React, {Component} from 'react'
import classes from './Footer.module.css'

class Footer extends Component {
  render() {
    return (
      <div className={classes.Footer}>
         <p>+7 (xxx) xxx-xx-xx</p>
        <div>
          <h1>Vk</h1>
          <h1>Fb</h1>
          <h1>Inst</h1>
        </div>
      </div>
    )
  }
}

export default Footer
