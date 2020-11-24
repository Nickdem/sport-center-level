import React, {useState} from 'react'
import classes from './TrialLesson.module.css'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const TrialLesson = () => {
  const formControls = {
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

  const [controls, setControls] = useState(formControls)
  const [valid, setValid] = useState(false)

  const validateControl = (value, validation) => {
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

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...controls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name =>{
      isFormValid = formControls[name].valid && isFormValid
    })

    setControls(formControls)
    setValid(isFormValid)
  }

  const renderInputs = Object.keys(controls).map((controlName, index) => {
    const control = controls[controlName]
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
        onChange={event => onChangeHandler(event, controlName)}
      />
    )
  })


  const submitHandler = event => {
    event.preventDefault()
    console.log( `Вы успешно отправили форму: Имя - ${controls.name.value}, Телефон - ${controls.tel.value}`)
  }

  return (
    <div className={classes.TrialLesson}>
      <h1>10% скидка на абонемент</h1>
      <p>Хотите скидку на абонемент? Приведите с собой друзей и получите -10% за каждого пришедшего</p>
      <form onSubmit={submitHandler}>
        {renderInputs}
        <Button disabled={!valid} type="submit">Отправить заявку</Button>
      </form>
    </div>
  )
}

export default TrialLesson
