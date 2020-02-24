import React, {useContext} from 'react'
import Promo from "../Components/Forms/Promo/Promo";
import {AppContext} from "../store/appContext";
import {Contact} from "../Components/Forms/Contact/Contact";
import {Bill} from "../Components/Forms/Select/Bill/Bill";
import {Button} from "../Components/UI/Button/Button";
import {Water} from "../Components/Forms/Select/Water/Water";
import {DatePicker} from "../Components/Forms/Select/Date/Date";

export const Order = () => {
  const {contact, order, agree, deviceType, mobileStep} = useContext(AppContext)

  const dispatchData = () => {
    console.log(contact, order, agree)
  }

  if (deviceType) {

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
            <div className='container'>
            <Button
              text='Далее'
              class='blue'
              type='mobileStep'
            />
            </div>
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
                <div className='rule'/>
                <DatePicker className='flex-grow-1'/>
              </div>
            </div>
            <div className="rule"/>
            <div className=''>
              <Bill/>
            </div>
            <div
              className='container'
              onClick={dispatchData}
            >
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

          <h2 style={{marginBottom: '10px'}}>Заполните данные</h2>
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
          <div
            onClick={dispatchData}
          >
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