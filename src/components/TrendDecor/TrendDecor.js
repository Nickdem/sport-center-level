import React from 'react'
import classes from './TrendDecor.module.css'
import trendMob from '../../img/trendMob.png'
import trendTab from '../../img/trendTab.png'
import trendDes from '../../img/trendDes.png'
import Button from '../Button/Button'

const TrendDecor = ({backHandler, moveHandler, back, move}) => {
  return (
    <div className={classes.TrendDecor}>
      <picture>
        <source media="(min-width: 1440px)" srcSet={trendDes} />
        <source media="(min-width: 768px)" srcSet={trendTab} />
        <img src={trendMob} alt="Изображение" />
      </picture>
      <div>
        <Button onClick={backHandler} disabled={back}>назад</Button>
        <Button onClick={moveHandler} disabled={move}>вперед</Button>
      </div>
    </div>
  )
}

export default TrendDecor
