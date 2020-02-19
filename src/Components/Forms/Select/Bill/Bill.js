import React, {useContext} from 'react'
import './Bill.css'
import {AppContext} from "../../../../store/appContext";

export const Bill = () => {
  const {order} = useContext(AppContext)



  return (
    <div className='bill'>
      <div className='flex flex-nowrap flex-row space-between'>
      <h2>Итого</h2>
        <h2 className='normal'>
          { ((order.bigBottles * 220) + (order.smallBottles * 175)) }
          <span>,00 ₽</span>
        </h2>
      </div>
      <hr/>
    </div>
  )
}