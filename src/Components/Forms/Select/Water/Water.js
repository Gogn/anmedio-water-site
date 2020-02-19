import React, {useContext, useState} from 'react'
import '../../../../index.css'
import './Water.css'
import './Counter.css'
import BigBottle from './bigBottle.svg.js'
import SmallBottles from './smallBottles.svg.js'
import {Counter} from "./Counter";
import {AppContext} from "../../../../store/appContext";

export const Water = () => {
  let none = '#D5DDE0'
  let select = '#FFC369'

  const [choise, setChoise] = useState(0)
  const {setBigBottles, setSmallBottles1, setSmallBottles2, order} = useContext(AppContext)

  const addBottlesHandler = (type) => {
    if (type === '+') {
      switch (choise) {
        case 0 :
          setBigBottles()
          break
        case 1 :
          setSmallBottles1()
          break
        case 2 :
          setSmallBottles2()
          break
      }
    }
  }

  const Select = ({amount}) => {
    return (
      <div className='select'>
        <button type='button' className="circle minus" onClick={() => addBottlesHandler('-')}><span/></button>
        <span className="amount"> {amount} </span>
        <button type='button' className="circle plus" onClick={() => addBottlesHandler('+')}><span/></button>
      </div>
    )
  }

  return (
    <div>
      <h3>Вода</h3>
      <div className='flex flex-row-nowrap space-between'>
        <div className='margin'>
          <button
            type='button'
            className='waterButton'
            onClick={() => setChoise(0)}
          >
            <BigBottle
              select={choise === 0 ? select : none}
              capacity='18,9'
              amount='1'
              price='220'
            />
          </button>
          {choise === 0 && <Select amount={order.bigBottles} />}
        </div>
        <div className='margin'>
          <button
            type='button'
            className='waterButton'
            onClick={() => setChoise(1)}
          >
            <SmallBottles
              select={choise === 1 ? select : none}
              capacity='1,5'
              amount='6'
              price='175'
            />
          </button>
          {choise === 1 && <Select amount={order.smallBottles1} />}
        </div>
        <div>
          <button
            type='button'
            className='waterButton'
            onClick={() => setChoise(2)}
          >
            <SmallBottles
              select={choise === 2 ? select : none}
              capacity='1,5'
              amount='12'
              price='270'
            />
          </button>
          {choise === 2 && <Select amount={order.smallBottles2} />}
        </div>
      </div>
    </div>
  )
}