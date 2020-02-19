import React, {useContext} from 'react'
import './Contact.css'
import '../../../index.css'
import {AppContext} from "../../../store/appContext";

export const Contact = () => {
  const {setContact} = useContext(AppContext)


  const submitHandler = (event) => {
    event.preventDefault()
    setContact()
  }

  return (
    <div>
      <h2>Заполните данные</h2>

      <form onSubmit={submitHandler}>

        <div className="flex flex-row flex-wrap space-around">
          <div className="item">
            <input type="text" className="form-input" placeholder='ФИО'/>
            <input type="text" className="form-input" placeholder='Телефон'/>
            <input type="text" className="form-input" placeholder='Почта'/>
            <input type="text" className="form-input" placeholder='Адрес доставки'/>
          </div>
          <input type="checkbox" required id="checkbox-data"/>
          <label htmlFor="checkbox-data" className="checkbox-data text-content"
          >Я согласен на <a href="/collecting-data">обработку персональных данных</a>
          </label>

        </div>


      </form>
    </div>
  )
}