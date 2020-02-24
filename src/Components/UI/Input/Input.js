import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched //Если контрол не валидированный и мы должны его валидировать и уже его потрогали - значит, что он невалидный
}

const Input = props => {

  const inputType = props.type || 'text'
  const cls = [classes.Input]

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  const formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct
    let match = cleaned.match(/^(\d|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      //Remove the matched extension code
      //Change this to format for any country code.
      let intlCode = (match[1] ? `+${match[1]} ` : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4], '-', match[5]].join('')
    }

    if ( str.match(/[A-z]|[А-я]/) ) return ''
    return str;
  }

  return (
    <div className={cls.join(' ')}>
      <input
        type={inputType}
        id={props.index}
        value={props.type === 'phone' ? formatPhoneNumber(props.value) : props.value}
        onChange={props.onChange}
        placeholder={props.label}
      />

      {  //Если в функции тру - показать сообщение об ошибке
        isInvalid(props)
          ? <p>{props.errorMessage || 'Введите верное значение'}</p>
          : null
      }

    </div>
  )
}

export default Input