import React, {useContext} from 'react'
// import MobileLayout from "../Layouts/MobileLayout";
// import DesktopLayout from "../Layouts/DesktopLayout";
import Promo from "../Components/Forms/Promo/Promo";
import {AppContext} from "../store/appContext";
import {Contact} from "../Components/Forms/Contact/Contact";
import {Select} from "../Components/Forms/Select/Select";
import {Bill} from "../Components/Forms/Select/Bill/Bill";
import {Button} from "../Components/UI/Button/Button";
import {ReactComponent as OkSvg} from './ok.svg'

export const OrderFinish = () => {
  const {deviceType, mobileStep} = useContext(AppContext)

  // const appContext = useContext(AppContext)

  if (deviceType) {
    return (
      <div className='main mobile flex flex-column '>
        <div className='padding-phone mobile flex space-between flex-column justify-center flex-grow-1'>
            <h3 style={{lineHeight: '0px'}}><OkSvg className='ok'/><span>Заказ Оформлен</span></h3>
          <div className='order-mobile'>
            <p>hghgjg<span>asdasdasd</span></p>
            <div className="rule-15"/>
            <p>hghgjg<span>asdasdasd</span></p>
            <div className="rule-15"/>
            <p>hghgjg<span>asdasdasd</span></p>
            <div className="rule-15"/>
            <p>Адрес доставки<span>asdasdasd</span></p>
          </div>

          <Bill/>
          <div className='container'>
          <p className='text-order-finish container' style={{width: '60vw'}}>Ваш заказ №221 успешно оформлен. В ближайшее время
            по указанному телефону с Вами свяжется наш менеджер.</p>
          </div>
          <div  className='container'>
            <Button
              text='Новый заказ'
              class='blue'
              to='/'
              useHistory={true}
            />
          </div>
        </div>
        </div>
    )
  } else {
    return (
      <div className='main flex flex-center'>

        <div className='promo'>
          <Promo/>
        </div>

        <div className="content flex space-between flex-column">

          <h2 style={{marginBottom: 0}}><OkSvg className='ok'/><span>Заказ Оформлен</span></h2>

          <div className='order'>
            <p>hghgjg<span>asdasdasd</span></p>
            <div className="rule-15"/>
            <p>hghgjg<span>asdasdasd</span></p>
            <div className="rule-15"/>
            <p>hghgjg<span>asdasdasd</span></p>
            <div className="rule-15"/>
            <p>Адрес доставки<span>asdasdasd</span></p>
          </div>

          <Bill/>
          <p className='text-order-finish' style={{color: '#818FB3'}}>Ваш заказ №221 успешно оформлен. В ближайшее время
            по указанному телефону с Вами свяжется наш менеджер.</p>
          <div>
            <Button
              text='Новый заказ'
              class='blue'
              to='/'
              useHistory={true}
            />
          </div>
        </div>
      </div>
    )
  }
}