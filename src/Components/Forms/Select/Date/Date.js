import React, {useContext, useEffect, useState} from 'react'
import './Date.css'
import forward from './forward.svg'
import back from './back.svg'
import {AppContext} from "../../../../store/appContext";

let state = {
  cls: {},
}

//Button with date
const DayButton = (props) => {
  return (
    <button className='date-btn'>
      <span className='date'>{props.date}</span>
      <span className='day' style={props.style}>{props.day}</span>
    </button>
  )
}

//
export const DatePicker = () => {

  const {deviceType, order} = useContext(AppContext)
  const [currentDay, setCurrentDay] = useState(order.date.getDate())
  const [shift, setShift] = useState(0)

  //Define last day of month
  const getDay = (currentDay) => {
    let lastDayNumber = new Date(order.date.getFullYear(), order.date.getMonth() + 1, 0).getDate();

    if (currentDay > lastDayNumber) {
      setCurrentDay(1)
      setShift(0)
    }
    return currentDay;
  }

  // Define day abbreviation
  const getDayAbbreviation = (dayNumber) => {
    //Out of bound protection
    while (dayNumber > 6) {
      dayNumber = dayNumber - 7
    }

    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    let day = days[dayNumber];
    if (day === 'вс' || day === 'сб') {
      state.cls = {color: '#FD7562'}
    } else {
      state.cls = {color: '#9CAEDD'}
    }
    return day;
  }

  //Initial buttons array formation
  let initialButtons = []
  if (!deviceType) {
    for (let i = shift; i < 6; i++) {
      initialButtons.push(
        <DayButton
          date={getDay(currentDay + i)}
          day={getDayAbbreviation(currentDay + i)}
          style={state.cls} key={i}
        />
      )
    }
  }
  // buttons - array of  <DayButton/>
  const [buttons, setButtons] = useState(initialButtons)

  // Shifting days by button 'shift' onClick
  // Баги:
    //    Не всегда срабатывает нажатие на кнопку сдвига
  //      Отрицательные значения не обрабатываются
  const dayShiftHandler = (event) => {
    event.preventDefault()
    switch (event.target.value) {
      case '-' :
        setShift(shift - 1)
        break
      case '+' :
        setShift(shift + 1)
        break
    }
    // event.target.value === '-' ? setShift(shift - 1) : setShift(shift + 1)

    if (!deviceType) {
      let newButton = []
      for (let i = shift; i < 6 + shift; i++) {
        newButton = [...newButton,
          <DayButton
            date={getDay(currentDay + i)}
            day={getDayAbbreviation(currentDay + i)}
            style={state.cls}
            key={i}
          />
        ]
      }
      setButtons(newButton)
    }
    console.log('shift: ' + shift)
    console.log('event: ' + event.target.value)
  }


  return (
    <div>
      <h1>Дата и время доставки</h1>
      <h5>День</h5>
      <form action="">
        {/*<Button onClick={this.handleInput} value="clear">C</Button>*/}
        <button className='shift' onClick={event => dayShiftHandler(event, "value")} value='-'>
          <img className='image' src={back} alt="back"/>
        </button>
        {buttons}
        <button className='shift' onClick={event => dayShiftHandler(event, "value")} value='+'>
          <img className='image' src={forward} alt="forward"/>
        </button>
      </form>

      <h5> Время </h5>
    </div>
  )
}