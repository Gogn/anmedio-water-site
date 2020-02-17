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
      <h1>Вода</h1>
      <div className='flex flex-row-wrap space-between'>
        <BigBottle select={select} capacity='18,9' amount='1' price='220'/>
        <SmallBottles select={none} capacity='1,5' amount='6' price='175'/>
        <SmallBottles select={none} capacity='1,5' amount='12' price='270'/>
      </div>
<Counter/>
    </div>
  )
}