import React from 'react'
import classes from './SubscriptionItemH.module.css'

const SubscriptionItemH = props =>  {
  return (
    <h1 className={classes.SubscriptionItemH}>{ props.subscription.textName }</h1>
    )
}

export default SubscriptionItemH
