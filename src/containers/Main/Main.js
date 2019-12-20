import React, {Component} from 'react'
import classes from './Main.module.css'
import MainContent from '../../components/Elements/MainContent/MainContent'

class Main extends Component {
  render() {
    return (
      <div className={classes.Main}>
        <MainContent />
      </div>
    )
  }
}

export default Main
