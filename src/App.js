import React from 'react'
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Main from './containers/Main/Main'
import Subscription from './containers/Subscription/Subscription'
import Trend from './containers/Trend/Trend'
import TrialLesson from './containers/TrialLesson/TrialLesson'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/subscription" component={Subscription} />
        <Route path="/trend" component={Trend} />
        <Route path="/triallesson" component={TrialLesson} />
        <Route path="/" component={Main} />
      </Switch>
    </Layout>
  )
}

export default App
