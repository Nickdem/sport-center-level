import React, {Component} from 'react'
import classes from './Subscription.module.css'
import SubscriptionContent from '../../components/Elements/SubscriptionContent/SubscriptionContent'
import Button from '../../components/Elements/Button/Button'

class Subscription extends Component {
  state= {
    subscriptions: [
       {textName: 'Разовое занятие', textPar: '300'},
       {textName: 'Месяц занятий', textPar: '2000'},
       {textName: '2 месяца занятий', textPar: '3500'},
       {textName: '3 месяца занятий', textPar: '4500'},
       {textName: 'Полгода занятий', textPar: '8000'}
     ]
  }

  render() {
    return (
      <div className={classes.Subscription}>
        <SubscriptionContent
          subscriptions={this.state.subscriptions}
        />
        <Button>Заказать абонемент</Button>
      </div>
    )
  }
}

export default Subscription
