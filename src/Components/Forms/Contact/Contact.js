import React from 'react'
// import React, {useContext} from 'react'
import './Contact.css'
// import {AppContext} from "../../../store/appContext";

export const Contact = () => {
  // const appContext = useContext(AppContext)

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

        <div className="flex flex-row-wrap space-around">
          <div className="item">
            <input type="text" className="form-input" placeholder='ФИО'/>
            <input type="text" className="form-input" placeholder='Телефон'/>
            <input type="text" className="form-input" placeholder='Почта'/>
            <input type="text" className="form-input" placeholder='Адрес доставки'/>
          </div>
          <input type="checkbox" required id="checkbox-data" className="checkbox-data"/>
          <label htmlFor="checkbox-data" className="checkbox-data"
          >Я согласен на <a href="/collecting-data">обработку персональных данных</a>
          </label>

        </div>


      </form>
    </div>
  )
}