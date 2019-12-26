import React from 'react'
import classes from './MainBlock.module.css'
import levelMob from '../../../../img/levelMob.png'
import levelTab from '../../../../img/levelTab.png'
import levelDes from '../../../../img/levelDes.png'
import {Link} from 'react-router-dom'
import Button from '../../Button/Button'

const MainBlock = props =>{
  return (
    <div className={classes.MainBlock}>
      <picture>
        <source media="(min-width: 1440px)" srcSet={levelDes} />
        <source media="(min-width: 768px)" srcSet={levelTab} />
        <img src={levelMob} alt="Изображение" />
      </picture>
      <p>Приглашаем вас и ваших друзей на бесплатное пробное занятие</p>
      <Link to="/triallesson"><Button>GO</Button>Записаться</Link>
    </div>
  )
}

export default MainBlock
