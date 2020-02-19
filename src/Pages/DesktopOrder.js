import React, {useContext} from 'react'
// import MobileLayout from "../Layouts/MobileLayout";
// import DesktopLayout from "../Layouts/DesktopLayout";
import Promo from "../Components/Forms/Promo/Promo";
import {AppContext} from "../store/appContext";
import {Contact} from "../Components/Forms/Contact/Contact";
import {Select} from "../Components/Forms/Select/Select";
import {Bill} from "../Components/Forms/Select/Bill/Bill";

export const DesktopOrder = () => {
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

        <div className='promo'>
          <Promo/>
        </div>

        <div className="content">

          <div className='contact'>
            <Contact/>
          </div>
          <hr/>
          <div className='select'>
            <Select/>
          </div>
          <hr/>
          <div className='order'>
            <Bill/>
          </div>

        </div>

      </div>
    )
  }
}