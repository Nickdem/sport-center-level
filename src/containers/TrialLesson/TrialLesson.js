import React, {Component} from 'react'
import classes from './TrialLesson.module.css'
import Button from '../../components/Elements/Button/Button'
import Input from '../../components/Elements/Input/Input'

class TrialLesson extends Component {
  state = {
    isFormValid: false,
    formControls: {
      name: {
        value: '',
        type: 'text',
        label: 'Ваше имя',
        errorMessage: 'Введите правильно имя',
        valid: false,
        touched: false,
        validation: {
          required: true,
        }
      },
      tel: {
        value: '',
        type: 'text',
        label: 'Ваш номер телефона',
        errorMessage: 'Введите корректный номер телефона',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 11
        }
      }
    }
  }

  sendingHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value)
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <div className={classes.TrialLesson}>
        <h1>10% скидка на абонемент</h1>
        <p>Хотите скидку на абонемент? Приведите с собой друзей и получите -10% за каждого пришедшего</p>
        <form onSubmit={this.submitHandler}>
          {this.renderInputs()}
          <Button onClick={this.sendingHandler}>Отправить заявку</Button>
        </form>
      </div>
    )
  }
}

export default TrialLesson
