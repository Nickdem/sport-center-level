import React from 'react'
import classes from './MainContent.module.css'
import mainMob from '../../img/mainMob.png'
import mainTab from '../../img/mainTab.png'
import mainDes from '../../img/mainDes.png'

const MainContent = () =>{
  return (
  <div className={classes.MainImg}>
    <picture>
      <source media="(min-width: 1440px)" srcSet={mainDes} />
      <source media="(min-width: 768px)" srcSet={mainTab} />
      <img src={mainMob} alt="Изображение" />
    </picture>
  </div>
  )
}

export default MainContent
