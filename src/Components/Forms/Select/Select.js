import React from 'react'
import {Water} from "./Water/Water";
import '../../../index.css'
import {DatePicker} from "./Date/Date";
import {Contact} from "../Contact/Contact";

export const Select = () => {
  return (
    <div className='flex space-around flex-wrap'>
        <Water/>
        <DatePicker className='flex-grow-1'/>
    </div>
  )
}


class StateContainer extends React.Component {
  state = {
    days: {},
    contacts: {},
    currentPage: 'days',
  }

  render() {
    if (this.state.selectedPage === 'days') {
      return <DatePicker setDays={(days) => {
        this.setState({days})
      }}/>
    } else {
      //return <Contacts/>
    }
  }
}