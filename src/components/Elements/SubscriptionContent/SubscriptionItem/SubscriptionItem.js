import React from 'react'
import classes from './SubscriptionItem.module.css'
import SubscriptionItemH from './SubscriptionItemContent/SubscriptionItemH'
import SubscriptionItemP from './SubscriptionItemContent/SubscriptionItemP'

const SubscriptionItem = props =>  {
  return (
    <div className={classes.SubscriptionItem}>
      <SubscriptionItemH subscription={props.subscription}/>
      <SubscriptionItemP subscription={props.subscription}/>
    </div>
    )
}

export default SubscriptionItem
