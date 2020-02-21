import React, {useContext} from 'react'
import './Bill.css'
import {AppContext} from "../../../../store/appContext";

export const Bill = () => {
  const {order} = useContext(AppContext)



  return (
    <div className='bill'>
      <div className='flex flex-nowrap flex-row space-between'>
      <h3 style={{marginBottom: '10px'}}>Итого</h3>
        <h2 className='normal'>
          { ((order.bigBottles * 220) + (order.smallBottles1 * 175) + (order.smallBottles2 * 270)) }
          <span>,00 ₽</span>
        </h2>
      </div>
      <hr/>
    </div>
  )
}