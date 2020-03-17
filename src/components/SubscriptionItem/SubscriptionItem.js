import React from 'react'
import classes from './SubscriptionItem.module.css'

const SubscriptionItem = ({ subscription }) =>  {
  return (
    <div className={classes.SubscriptionItem}>
      <h1>{ subscription.textName }</h1>
      <p><strong>{subscription.textPar }</strong> руб.</p>
    </div>
    )
}

export default SubscriptionItem
