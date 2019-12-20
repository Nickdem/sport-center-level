import React from 'react'
import classes from './MainContent.module.css'
import mainMob from '../../../img/mainMob.png'
import levelMob from '../../../img/levelMob.png'
import mainTab from '../../../img/mainTab.png'
import levelTab from '../../../img/levelTab.png'
import mainDes from '../../../img/mainDes.png'
import levelDes from '../../../img/levelDes.png'

const MainContent = props =>{
  return (
  <div className={classes.MainContent}>
    <picture className={classes.MainImg}>
      <source media="(min-width: 1440px)" srcSet={mainDes} />
      <source media="(min-width: 768px)" srcSet={mainTab} />
      <img src={mainMob} alt="Изображение" />
    </picture>
    <div>
      <picture>
        <source media="(min-width: 1440px)" srcSet={levelDes} />
        <source media="(min-width: 768px)" srcSet={levelTab} />
        <img src={levelMob} alt="Изображение" />
      </picture>
      <p>Приглашаем вас и ваших друзей на бесплатное пробное занятие</p>
      <button>Запись</button>
    </div>
  </div>
  )
}

export default MainContent
