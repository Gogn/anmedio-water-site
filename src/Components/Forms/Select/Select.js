import React from 'react'
import {Water} from "./Water/Water";
import '../../../index.css'
import {DatePicker} from "./Date/Date";

export const Select = () => {
  return (
    <div>
      <Water/>
      <DatePicker/>
    </div>
  )
}