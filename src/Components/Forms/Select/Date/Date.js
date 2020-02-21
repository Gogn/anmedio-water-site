import React, {useContext, useState} from 'react'
import '../../../../index.css'
import './Date.css'
import forward from './forward.svg'
import back from './back.svg'
import {AppContext} from "../../../../store/appContext";
import moment from "moment";

//Buttons with dates component
export const DatePicker = () => {
  const {deviceType, mobileStep, setMobileStep, setBigBottles, setSmallBottles1, setSmallBottles2} = useContext(AppContext)
  const [activeDay, setActiveDay] = useState()
  let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

  const initialDates = () => {
    const today = new Date();
    const dates = []
    let j
    deviceType == 1 ? j = 29 : j = 6
    for (let i = 0; i < j; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  // Shifts
  const nextDate = (date) => {
    const m = moment(new Date(date));
    m.add(1, 'day');
    return m.toDate()
  }
  const prevDate = (date) => {
    const m = moment(new Date(date));
    m.subtract(1, 'day');
    console.log(m.subtract)
    return m.toDate()
  }

  const shiftRight = () => {
    let daysLocal = days.concat([]);
    daysLocal.shift();
    const last = daysLocal[daysLocal.length - 1];
    const date = nextDate(last)
    daysLocal.push(date);
    setDays(daysLocal)
  }

  const shiftLeft = () => {
    let daysLocal = days.concat([]);
    const first = days[0];
    days.pop()
    const date = prevDate(first);
    daysLocal = [date].concat(days);
    setDays(daysLocal)
  }
  const [days, setDays] = useState(initialDates)


  //Buttons with time component
  const timeIntervalsWeekday = ['10:00 - 11:00', '12:00 - 13:00', '15:00 - 16:00']
  const timeIntervalsHoliday = ['12:00 - 13:00', '15:00 - 16:00']

  const Times = () => {
    let workTimes = []
    if ((week[order.date.getDay()] === 'вс' || week[order.date.getDay()] === 'сб')) {
      for (let i = 0; i < timeIntervalsHoliday.length; i++) {
        workTimes.push(timeIntervalsHoliday[i])
      }
    } else {
      for (let i = 0; i < timeIntervalsWeekday.length; i++) {
        workTimes.push(timeIntervalsWeekday[i])
      }
    }
    return workTimes;
  }

  const {setDate, order} = useContext(AppContext)

  return (
    <div>
      <h3>Дата и время доставки</h3>

      <div className=''>

        <h5>День</h5>
        <form action="">
          <div className="flex">
            <div className={'flex flex-row-nowrap space-between' + (deviceType == 1 && ' mobile-overscroll')}>
              <div style={deviceType == 1 ? {display: 'none'} : {}}>
                <button type="button" className='shift' onClick={shiftLeft}>
                  <img className='image' src={back} alt="back"/>
                </button>
              </div>
              {days.map(date => {
                return <DayButton
                  dateFull={date} key={date}
                  day={week[date.getDay()]}
                />
              })}
              <div style={deviceType == 1 ? {display: 'none'} : {}}>
                <button type="button" className='shift' onClick={shiftRight}>
                  <img className='image' src={forward} alt="forward"/>
                </button>
              </div>
            </div>
          </div>
        </form>


        <h5>Время</h5>
        <div className='flex'>
          <form action="">
            {Times().map(time => {
              return <TimeButton
                time={time} key={time}
              />
            })}
          </form>
        </div>

      </div>
    </div>
  )
}

const DayButton = ({dateFull, day, onClick, isActive}) => {
  const {setDate, order} = useContext(AppContext)

  const date = dateFull.getDate()

  const SetDateHandler = () => {
    setDate(dateFull)
  }

  return (
    <div>
      <button type="button" className='date-btn' onClick={SetDateHandler}
              style={order.date.getDate() === date ? {backgroundColor: '#FFC369', color: '#fff'} : {}}
      >
      <span className='date'
            style={order.date.getDate() === date ? {color: '#fff'} : {}}
      >
        {date}
      </span>
        <span className='day'
              style={(day === 'вс' || day === 'сб') ? {color: '#FD7562'} : {}}
        >
        {day}
      </span>
      </button>
    </div>
  )
}

const TimeButton = ({time}) => {
  const {setTime, order} = useContext(AppContext)

  const SetTimeHandler = () => {
    setTime(time)
  }

  return (
    <button type="button" className='time-btn' onClick={SetTimeHandler}
            style={order.time === time ? {backgroundColor: '#FFC369', color: '#fff'} : {}}
    >
      <span className='date'
            style={order.time === time ? {color: '#fff'} : {}}
      >
        {time}
      </span>
    </button>
  )
}