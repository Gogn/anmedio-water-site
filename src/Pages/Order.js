import React, {useContext} from 'react'
// import MobileLayout from "../Layouts/MobileLayout";
// import DesktopLayout from "../Layouts/DesktopLayout";
import Promo from "../Components/Forms/Promo/Promo";
import {AppContext} from "../store/appContext";
import {Contact} from "../Components/Forms/Contact/Contact";
import {Select} from "../Components/Forms/Select/Select";
import {Bill} from "../Components/Forms/Select/Bill/Bill";
import {Button} from "../Components/UI/Button/Button";
import {useHistory} from "react-router-dom";
import {Water} from "../Components/Forms/Select/Water/Water";
import {DatePicker} from "../Components/Forms/Select/Date/Date";

export const Order = () => {
  const {deviceType, mobileStep} = useContext(AppContext)

  // const appContext = useContext(AppContext)

  if (deviceType) {
    console.log(mobileStep)

    if (mobileStep === 1) {
      return (
        <div className='main mobile flex flex-column '>
          <div className='flex flex-center flex-column justify-center padding flex-grow-1'>
          <Promo/>
            <Button
              text='Заказать воду'
              class='blue'
              type='mobileStep'
            />
          </div>
        </div>
      )
    }
    if (mobileStep === 2) {
      return (
        <div className='main mobile flex flex-column'>
          <div className='padding-phone flex space-between flex-column justify-center flex-grow-1'>
            <div>
            <h3 style={{marginBottom: '5px'}}>Заполните данные</h3>
          <Contact/>
            </div>
            <Button
              text='Далее'
              class='blue'
              type='mobileStep'
            />
          </div>
        </div>
      )
    }
    if (mobileStep === 3) {
      return (
        <div className='main flex flex-column'>
          <div className='padding-phone mobile flex space-between flex-column justify-center flex-grow-1'>
            <div className='select'>
              <div>
                <Water/>
                <div className='rule'></div>
                <DatePicker className='flex-grow-1'/>
              </div>
            </div>
            <div className="rule"/>
            <div className=''>
              <Bill/>
            </div>
            <div className='container'>
              <Button
                text='Заказать воду'
                class='blue'
                type='useHistory'
                to='/order'
                useHistory={true}
              />
            </div>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div className='main flex flex-center'>

        <div className='promo'>
          <Promo/>
        </div>

        <div className="content">

          <h2>Заполните данные</h2>
          <div className='contact'>
            <Contact/>
          </div>
          <div className="rule"/>
            <div className='select flex flex-row flex-center space-around flex-wrap'>
              <Water/>
              <DatePicker/>
          </div>
          <div className="rule"/>
          <div className=''>
            <Bill/>
          </div>
          <div>
            <Button
              text='Заказать воду'
              class='blue'
              type='useHistory'
              to='/order'
              useHistory={true}
            />
          </div>

        </div>

      </div>
    )
  }
}