import React, {useContext} from 'react'
// import MobileLayout from "../Layouts/MobileLayout";
// import DesktopLayout from "../Layouts/DesktopLayout";
import Promo from "../Components/Forms/Promo/Promo";
import {AppContext} from "../store/appContext";
import {Contact} from "../Components/Forms/Contact/Contact";

export const DesktopOrder = () => {
  const {deviceType, mobileStep} = useContext(AppContext)

  const appContext = useContext(AppContext)

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
  }

  else {
    return (
      <div className='grid desktop-1'>

        <div className='Promo'>
          <Promo/>
        </div>

        <div className='Contact'>
          <Contact/>
        </div>
        <div className='Select'>
          <h1>Select</h1>
        </div>

      </div>
    )
  }
}