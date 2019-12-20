import React from 'react'
import classes from './SubscriptionItemP.module.css'

const SubscriptionItemP = props =>  {
  return (
    <p className={classes.SubscriptionItemP}><strong>{ props.subscription.textPar }</strong> руб.</p>
    )
}

export default SubscriptionItemP
