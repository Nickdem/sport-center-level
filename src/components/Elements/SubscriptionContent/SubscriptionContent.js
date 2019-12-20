import React from 'react'
import SubscriptionItem from './SubscriptionItem/SubscriptionItem'

const SubscriptionContent = props =>  {
  return (
    <div>
      { props.subscriptions.map((subscription, index) => {
        return (
          <SubscriptionItem key={index} subscription={subscription} />
        )}
        )
      }
    </div>
  )
}

export default SubscriptionContent
