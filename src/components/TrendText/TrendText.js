import React from 'react'
import classes from './TrendText.module.css'

const TrendText = props => {
  return (
    <div className={classes.TrendText}>
      <h1>Направление -</h1>
      <h2>{props.textName}</h2>
      <p>{props.textPar}</p>
    </div>      
  )
}

export default TrendText
