import React from 'react'
import './Promo.css'
import Logo from "./logo";

export default () => {
  return (
    <div className='promo'>
      <div className='logo'>
        <Logo/>
        <h1>Чистая Вода</h1>
      </div>
      <p>Питьевая вода, предназначенная для ежедневного потребления, идеально подходит для кулеров. Закажите доставку
        воды и мы привезем её на дом или в офис.</p>
    </div>
  )
}

