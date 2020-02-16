import React, {useContext} from 'react'
import './Contact.css'
import {AppContext} from "../../../store/appContext";

export const Contact = () => {
  const appContext = useContext(AppContext)

  const submitHandler = (event) => {
    event.preventDefault()
  }
  //
  // const cls = {height: '50px'}
  //
  // if (appContext.deviceType) {
  //   cls.height="50px"
  // }
  // console.log(cls)

  return (
    <div>
      <h1>Заполните данные</h1>

      <form onSubmit={submitHandler}>

        <div className="form-group">

            <div className="item"><input type="text" className="form-input"  placeholder='ФИО'/></div>
            <div className="item"><input type="text" className="form-input" placeholder='Телефон'/></div>
            <div className="item"><input type="text" className="form-input" placeholder='Почта'/></div>
            <div className="item"><input type="text" className="form-input" placeholder='Адрес доставки'/></div>

          <input type="checkbox" required id="checkbox-data" className="checkbox-data"/>
          <label htmlFor="checkbox-data" className="checkbox-data"
          >Я согласен на <a href="/collecting-data">обработку персональных данных</a>
          </label>

        </div>


      </form>
    </div>
  )
}