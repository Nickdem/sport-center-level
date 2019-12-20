import React from 'react'
import classes from './TrendContent.module.css'
import TrendText from './TrendText/TrendText'
import TrendDecor from './TrendDecor/TrendDecor'

const TrendContent = props => {
  return (
    <div className={classes.TrendContent}>
      <TrendText textName={props.textName} textPar={props.textPar} />
      <TrendDecor backHandler={props.clickBackHandler} moveHandler={props.clickMoveHandler}/>
    </div>
  )
}

export default TrendContent
