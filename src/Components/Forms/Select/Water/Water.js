import React from 'react'
import '../../../../index.css'
import BigBottle from './bigBottle.svg.js'
import SmallBottles from './smallBottles.svg.js'
import {Counter} from "./Counter";

export const Water = () => {

  let none = '#D5DDE0'
  let select = '#FFC369'

  return (
    <div>
      <h2>Вода</h2>
      <div className='flex flex-row-nowrap space-between'>
        <div className='margin'>
          <BigBottle select={select} capacity='18,9' amount='1' price='220'/>
        </div>
        <div className='margin'>
          <SmallBottles select={none} capacity='1,5' amount='6' price='175'/>
        </div>
        <div>
          <SmallBottles select={none} capacity='1,5' amount='12' price='270'/>
        </div>
      </div>
      <Counter/>
    </div>
  )
}