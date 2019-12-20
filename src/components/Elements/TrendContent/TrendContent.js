import React from 'react'
import classes from './TrendContent.module.css'
import trendMob from '../../../img/trendMob.png'
import trendTab from '../../../img/trendTab.png'
import trendDes from '../../../img/trendDes.png'

const TrendContent = props => {
  return (
    <div className={classes.TrendContent}>
      <div className={classes.TrendText}>
        <h1>Направление -</h1>
        <h2>{props.textName}</h2>
        <p>{props.textPar}</p>
      </div>
      <div className={classes.TrendDecor}>
        <picture>
          <source media="(min-width: 1440px)" srcSet={trendDes} />
          <source media="(min-width: 768px)" srcSet={trendTab} />
          <img src={trendMob} alt="Изображение" />
        </picture>
        <div>
          <button onClick={props.clickBackHandler}>назад</button>
          <button onClick={props.clickMoveHandler}>вперед</button>
        </div>
      </div>
    </div>
  )
}

export default TrendContent
