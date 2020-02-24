import React, {useContext} from 'react'
import Promo from "../Components/Forms/Promo/Promo";
import {AppContext} from "../store/appContext";
import {Bill} from "../Components/Forms/Select/Bill/Bill";
import {Button} from "../Components/UI/Button/Button";
import {ReactComponent as OkSvg} from './ok.svg'
import {OrderList} from "../Components/Forms/Order/OrderList";

export const OrderFinish = () => {
  const {deviceType, orderAgain} = useContext(AppContext)

  if (deviceType) {
    return (
      <div className='main mobile flex flex-column '>
        <div className='padding-phone mobile flex space-between flex-column justify-center flex-grow-1'>
            <h3 style={{lineHeight: '0px'}}><OkSvg className='ok'/><span>Заказ Оформлен</span></h3>
          <div className='order-mobile'>
            <OrderList/>
          </div>

          <Bill/>
          <div className='container'>
          <p className='text-order-finish container' style={{width: '60vw'}}>Ваш заказ №221 успешно оформлен. В ближайшее время
            по указанному телефону с Вами свяжется наш менеджер.</p>
          </div>
          <div className='container'
               onClick={orderAgain}
          >
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
            <OrderList/>
          </div>

          <Bill/>
          <p className='text-order-finish' style={{color: '#818FB3'}}>Ваш заказ №221 успешно оформлен. В ближайшее время
            по указанному телефону с Вами свяжется наш менеджер.</p>
          <div
               onClick={orderAgain}
          >
            <Button
              style={{marginTop: '30px'}}
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