import React, {Component} from 'react'
import classes from './TrialLesson.module.css'

class TrialLesson extends Component {
  render() {
    return (
      <div className={classes.TrialLesson}>
        <h1>10% скидка на абонемент</h1>
        <p>Хотите скидку на абонемент? Приведите с собой друзей и получите -10% за каждого пришедшего</p>
        <form>
          <label>Имя</label>
          <input type='text' />
          <label>Номер</label>
          <input type='text' />
          <button>Отправить заявку</button>
        </form>
      </div>
    )
  }
}

export default TrialLesson
