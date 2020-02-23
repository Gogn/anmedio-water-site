import React, {useContext} from 'react'
import './Contact.css'
import '../../../index.css'
import {AppContext} from "../../../store/appContext";
import Input from "../../UI/Input/Input";
import is from 'is_js'

export const Contact = () => {
  const {setContact, contact} = useContext(AppContext)


  const submitHandler = (event) => {
    event.preventDefault()
    setContact()
    console.log(event.target.value)
  }

  const validateControl = (value, validation) => {
    if (!validation) return true //Если параметры не были переданы - не валидировать

    let isValid = true
    if (validation.required) {
      isValid = value.trim() !== '' && isValid //Если в строке что-то сдержится и проверка еще не была зафейлена
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }
    if (validation.phone) {
      isValid = is.nanpPhone(value) && isValid
    }

    return isValid
  }

 const onChangeHandler = (event, controlName) => {
    const formControls = {...contact}
    const control = {...formControls[controlName]}

    control.value = event.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)
    formControls[controlName] = control //Изменение состояния state после получений новых значений выше

    let isFormValid = true
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

   setContact(formControls)
    // this.setState({
    //   formControls, isFormValid
    // })
  }

  const renderInputs = () => {
    return Object.keys(contact).map((controlName, index) => {
      const control = contact[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation} //Преобразование в булевый тип
          onChange={event => onChangeHandler(event, controlName)}
        />
      )
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <div className="flex flex-row flex-wrap space-around">
          <div className="item">
            {renderInputs()}
          </div>
          <input type="checkbox" required id="checkbox-data"/>
          <label htmlFor="checkbox-data" className="checkbox-data text-content"
          ><p className="text-inline">Я согласен на</p>&nbsp;
            <a href="/collecting-data">обработку персональных данных</a>
          </label>

        </div>


      </form>
    </div>
  )
}