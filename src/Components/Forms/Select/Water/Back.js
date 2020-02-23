import React, {useContext} from 'react'
import {ReactComponent as BackSvg} from "./back.svg";
import {AppContext} from "../../../../store/appContext";

export const Back = () => {
  const {deviceType, mobileStep, setMobileStep} = useContext(AppContext)

  const setMobileStepHandler = () => {
    setMobileStep(mobileStep - 1)
  }

  if (deviceType === 1) {
    return (
      <>
        <div className='back'>
          <button
            className='okButton'
            onClick={setMobileStepHandler}
          >
            <BackSvg/>
          </button>
        </div>
      </>
    )
  } else {
    return null
  }
}