import React, {Component} from 'react'
import classes from './TrialLesson.module.css'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

class TrialLesson extends Component {
  state = {
    isFormValid: false,
    formControls: {
      name: {
        value: '',
        type: 'text',
        label: 'Ваше имя',
        errorMessage: 'Введите правильно имя(минимум 2 символа)',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 2
        }
      },
      tel: {
        value: '',
        type: 'text',
        label: 'Ваш номер телефона',
        errorMessage: 'Введите корректный номер телефона(минимум 6 символов)',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  sendingHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name =>{
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
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
          <Button disabled={!this.state.isFormValid} onClick={this.sendingHandler}>Отправить заявку</Button>
        </form>
      </div>
    )
  }
}

export default TrialLesson
