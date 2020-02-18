import React, {useContext} from 'react';
import back from "./back.svg";
import moment from 'moment';
import {AppContext} from "../../../../store/appContext";
import forward from "./forward.svg";

function prevDate(date) {
  const m = moment(new Date(date));
  m.subtract(1, 'day');
  console.log(m.subtract)
  return m.toDate()

}

function nextDate(date) {
  const m = moment(new Date(date));
  m.add(1, 'day');
  return m.toDate()

}

let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

export default class Date2 extends React.Component {
  state = {
    activeDay: null,
    dayList: [],
  }

  constructor(props) {
    super(props);
    const today = new Date();

    const days = [];
    for (let i = 0; i<6;i++) {
      const date = new Date();
      date.setDate(today.getDate()+i)
      days.push(date);
    }
    this.state = {
      days
    }

  }

  setActiveDay(day) {
    this.setState({activeDay: day})
  }

  shiftRight = () => {
    const days = this.state.days.concat([]);
    days.shift();
    const last = days[days.length - 1];
    const date = nextDate(last)
    days.push(date);
    this.setState({days})
  }

  shiftLeft = () => {
    let days = this.state.days.concat([]);
    const first = days[0];
    days.pop()
    const date = prevDate(first);
    days = [date].concat(days);
    this.setState({days})
  }

  render() {
    return <div>
      <h2>Дата и время доставки</h2>
      <div>
        <h5>День</h5>
        <div className='flex flex-row flex-center  flex-nowrap space-between'>
          <button className='shift' value='-' onClick={this.shiftLeft}>
            <img className='image' src={back} alt="back"/>
          </button>
          <div style={{maxWidth: '400px'}}>
          {this.state.days.map(date => {
            const day = date.getDate();
            return <DayButton
              date={day} key={day}
              day={week[date.getDay()]}
              isActive={day === this.state.activeDay}
              onClick={() => {
                this.setActiveDay(day);
              }}
            />
          })}
          </div>
          <button className='shift' onClick={this.shiftRight} value='+'>
            <img className='image' src={forward} alt="forward"/>
          </button>
        </div>
      </div>
    </div>
  }
}


const DayButton = ({date, day, onClick, isActive}) => {

  return (
    <button className='date-btn' onClick={onClick}>
      <span className='date' style={isActive ? {color: 'red'} : {}}>{date}</span>
      <span className='day' >{day}</span>
    </button>
  )
}