import React from 'react'
import classes from './Subscription.module.css'
import SubscriptionItem from '../../components/SubscriptionItem/SubscriptionItem'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'

const Subscription = () => {
  const subscriptions = [
     {textName: 'Разовое занятие', textPar: '300'},
     {textName: 'Месяц занятий', textPar: '2000'},
     {textName: '2 месяца занятий', textPar: '3500'},
     {textName: '3 месяца занятий', textPar: '4500'},
     {textName: 'Полгода занятий', textPar: '8000'}
   ]


  return (
    <div className={classes.Subscription}>
      <div>
      {subscriptions.map((subscription, index) => {
        return (
          <SubscriptionItem key={index} subscription={subscription} />
        )}
      )}
      </div>
      <Link to='/triallesson'><Button>Заказать абонемент</Button></Link>
    </div>
  )

}

export default Subscription
