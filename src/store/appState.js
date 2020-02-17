import React, {useReducer} from 'react'
import {appReducer} from "./appReducer";
import {APP_SET_DEVICE, ORDER_AGAIN} from "./types";
import {AppContext} from "./appContext";

export const AppState = ({children}) => {
  const initialState = {
    deviceType: isMobile(),
    mobileStep: 1,
    isAuthenticated: false,
    order: {
      waterType: 1,
      waterAmount: 1,
      date: new Date(),
      time: '12:00-13:00'
    }
  }

  function isMobile() {
    return ((window.innerWidth < 600) && (window.innerHeight < 600))
  }


  const [state, dispatch] = useReducer(appReducer, initialState)

  const setDevice = (payload) => dispatch({type: APP_SET_DEVICE, payload: payload})
  // const setStep = (payload) => dispatch({type: APP_SET_STATE, payload: payload})
  // const setAuth = (payload) => dispatch({type: APP_SET_STATE, payload: payload})
  // const setOrder = (payload) => dispatch({type: APP_SET_STATE, payload: payload})
  const orderAgain = () => dispatch({type: ORDER_AGAIN})

  const {deviceType, mobileStep, isAuthenticated, order} = state

  return (
    <AppContext.Provider value={{
      isMobile, setDevice, orderAgain,
      deviceType, mobileStep, isAuthenticated, order
    }}>
      {children}
    </AppContext.Provider>
  )
}