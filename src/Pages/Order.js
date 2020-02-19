import React, {useContext} from 'react'
// import MobileLayout from "../Layouts/MobileLayout";
// import DesktopLayout from "../Layouts/DesktopLayout";
import Promo from "../Components/Forms/Promo/Promo";
import {AppContext} from "../store/appContext";
import {Contact} from "../Components/Forms/Contact/Contact";
import {Select} from "../Components/Forms/Select/Select";
import {Bill} from "../Components/Forms/Select/Bill/Bill";
import {Button} from "../Components/UI/Button/Button";
import { ReactComponent as OkSvg } from './ok.svg'

export const Order = () => {
  const {deviceType, mobileStep} = useContext(AppContext)

  // const appContext = useContext(AppContext)

  if (deviceType) {
    if (mobileStep === 1) {
      return (
        <div className='desktop'>
          <h1>Mobile</h1>
          <div className='c'>asdasd</div>
          <div>qweqweqwe</div>
          <div>zxczxczxc</div>
          <Promo/>
        </div>
      )
    }
    if (mobileStep === 2) {
      return (
        <>
          2
          <Promo/>
        </>
      )
    }
  } else {
    return (
      <div className='main flex flex-center'>

        <div className='flex-grow-1'>
          <Promo/>
        </div>

        <div className="content">

          <h2><OkSvg className='ok'/><span>Заказ Оформлен</span></h2>

          <div className='order'>
            <p>hghgjg<span>asdasdasd</span></p>
            <p>hghgjg<span>asdasdasd</span></p>
            <p>hghgjg<span>asdasdasd</span></p>
            <p>hghgjg<span>asdasdasd</span></p>
          </div>

            <Bill/>
            <p className='text-content' style={{color: '#818FB3'}}>Ваш заказ №221 успешно оформлен. В ближайшее время по указанному телефону с Вами свяжется наш менеджер.</p>
          <div>
            <Button
              text='Новый заказ'
              type='blue'
              to='/'
            />
          </div>
        </div>

      </div>
    )
  }
}