import React from 'react'
import {Water} from "./Water/Water";
import '../../../index.css'
import {DatePicker} from "./Date/Date";

export const Select = () => {
  return (
    <div className='flex space-around flex-wrap'>
      {/*<div className='flex-grow-1'>*/}
        <Water/>
      {/*</div>*/}
      {/*<div className='flex-grow-1'>*/}
        <DatePicker className='flex-grow-1'/>
      {/*</div>*/}
    </div>
  )
}