import React, {useContext, useState} from 'react'
import './Date.css'
import forward from './forward.svg'
import back from './back.svg'
import {AppContext} from "../../../../store/appContext";

let state = {
  // currentDay: new Date().getDate(),
  cls: {},
}


//Button with date
const DayButton = ({date, day, style, key}) => {
  const {setDate} = useContext(AppContext)
  const {order} = useContext(AppContext)

  const SetDateHandler = (event, date) => {
    event.preventDefault()
    setDate(date)
    console.log('event: ' + date)
    console.log('order.date1: ' + order.date)
  }

  const date1 = date
  console.log('date1: ' + date)
  return (
    <button className='date-btn' onClick={(event) => SetDateHandler(event, date)}>
      <span className='date'>{date}</span>
      <span className='day' style={style}>{day}</span>
    </button>
  )
}

//Buttons with time intervals
const TimeButton = ({time, key}) => {
  return (
    <button className='time-btn'>
      <span className='date'>{time}</span>
    </button>
  )
}

//Buttons with dates component
export const DatePicker = () => {
  const {deviceType, order} = useContext(AppContext)
  const dateNow = new Date()
  const [currentDay, setCurrentDay] = useState(dateNow.getDate())
  const [shift, setShift] = useState(0)
  const [selectedDay, setSelectedDay] = useState(0)


  //Define last day of month
  const getDay = (currentDay) => {
    let lastDayNumber = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0).getDate();

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
  let initialDateButtons = []
  if (!deviceType) {
    for (let i = shift; i < 6; i++) {
      initialDateButtons.push(
        <DayButton
          date={getDay(currentDay + i)}
          day={getDayAbbreviation(currentDay + i)}
          style={state.cls}
          key={i}
        />
      )
    }
  }
  // Datebuttons - array of  <DayButton/>
  const [dateButtons, setDateButtons] = useState(initialDateButtons)

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
      setDateButtons(newButton)
    }
    console.log('shift: ' + shift)
    console.log('event: ' + event.target.value)
  }


  const timeIntervalsWeekday = ['10:00 - 11:00', '12:00 - 13:00', '15:00 - 16:00']
  const timeIntervalsHoliday = ['12:00 - 13:00', '15:00 - 16:00']

  //Initial timeButtons array formation
  let initialTimeButtons = []
  if (getDayAbbreviation(currentDay) === 'вс' || getDayAbbreviation(currentDay) === 'сб') {
    for (let i = 0; i < timeIntervalsWeekday.length; i++) {
      initialTimeButtons.push(
        <TimeButton
          time={timeIntervalsWeekday[i]}
          style={state.cls} key={i}
        />
      )
    }
  } else {
    for (let i = 0; i < 3; i++) {
      initialTimeButtons.push(
        <TimeButton
          time={timeIntervalsWeekday[i]}
          style={state.cls} key={i}
        />
      )
    }
  }

  const timePicker = () => {
    //Initial timeButtons array formation
    let initialTimeButtons = []
    if (!deviceType) {
      for (let i = shift; i < timeIntervalsHoliday.length; i++) {
        initialTimeButtons.push(
          <TimeButton
            time={timeIntervalsHoliday[i]}
            style={state.cls} key={i}
          />
        )
      }
    }
  }
  // TimeButtons - array of  <DayButton/>
  const [timeButtons, setTimeButtons] = useState(initialTimeButtons)
  const {setDate} = useContext(AppContext)

  console.log(dateButtons)
  return (
    <div>
      <h2>Дата и время доставки</h2>

      <div className=''>

        <h5>День</h5>
          <form action="">
            <div className='flex flex-row flex-center  flex-nowrap space-between'>

            <button className='shift' onClick={dayShiftHandler} value='-'>
              <img className='image' src={back} alt="back"/>
            </button>
            {dateButtons}
            <button className='shift' onClick={dayShiftHandler} value='+'>
              <img className='image' src={forward} alt="forward"/>
            </button>
            </div>

          </form>


        <h5>Время</h5>
        <div className='flex flex-row flex-center space-around'>
          <form action="">
            {timeButtons}
          </form>
        </div>

      </div>
    </div>
  )
}