import React from 'react'
import './Promo.css'
import Logo from "./logo.svg.js";

export default () => {
  return (
    <>
      <div className='logo'>
        <Logo width='130' height='130'/>
        <h1>Чистая Вода</h1>
      </div>
      <div className='about'>
        <p>Питьевая вода, предназначенная для ежедневного потребления, идеально подходит для кулеров. Закажите доставку
          воды и мы привезем её на дом или в офис.</p>
      </div>
    </>
  )
}