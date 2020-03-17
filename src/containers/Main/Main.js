import React from 'react'
import classes from './Main.module.css'
import MainContent from '../../components/MainContent/MainContent'
import MainBlock from '../../components/MainBlock/MainBlock'

const Main = () => {
  return (
    <div className={classes.Main}>
      <MainContent />
      <MainBlock />
    </div>
  )
}

export default Main
