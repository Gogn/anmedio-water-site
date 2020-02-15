import React, {useContext} from 'react'
// import MobileLayout from "../Layouts/MobileLayout";
// import DesktopLayout from "../Layouts/DesktopLayout";
import Icon from "../Components/Forms/Promo/Promo";
import Promo from "../Components/Forms/Promo/Promo";
import {AppContext} from "../store/appContext";

export const Contact = () => {
  const {deviceType, mobileStep} = useContext(AppContext)

  const appContext = useContext(AppContext)

  if (deviceType) {
    if (mobileStep === 1) {
      return (
        <div className='desktop'>
          <h1>Mobile</h1>
          <button onClick={() =>  appContext.setDevice(false)}/>
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
      <div>
        <h1>Desktop</h1>
        <Icon/>
      </div>
    )
  }
}