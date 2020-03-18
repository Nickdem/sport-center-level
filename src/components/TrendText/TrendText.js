import React from 'react'
import classes from './TrendText.module.css'

const TrendText = ({trend}) => {
  return (
    <div className={classes.TrendText}>
      <h1>Направление -</h1>
      <h2>{trend.textName}</h2>
      <p>{trend.textPar}</p>
    </div>
  )
}

export default TrendText
