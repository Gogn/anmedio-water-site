import React from 'react'
import './Counter.css'

export const Counter = () => {
  return (
    <div className=''>
      <button className="circle minus"><span></span></button>
      <span className="amount">0</span>
      <button className="circle plus"><span></span></button>
    </div>
  )
}