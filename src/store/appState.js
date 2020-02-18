import React, {useReducer} from 'react'
import {appReducer} from "./appReducer";
import {APP_SET_DEVICE, ORDER_AGAIN, SET_DATE, SET_TIME} from "./types";
import {AppContext} from "./appContext";

export const AppState = ({children}) => {
  const initialState = {
    deviceType: isMobile(),
    mobileStep: 1,
    isAuthenticated: false,
    order: {
      waterType: 1,
      waterAmount: 1,
      date: '',
      time: '12:00-13:00'
    }
  }

  function isMobile() {
    return ((window.innerWidth < 600) && (window.innerHeight < 600))
  }


  const [state, dispatch] = useReducer(appReducer, initialState)

  const setDevice = (payload) => dispatch({type: APP_SET_DEVICE, payload: payload})
  const setDate = (payload) => {
    console.log('appState: ' + state.order.date)
    dispatch({type: SET_DATE, payload: payload})}
  const setTime = (payload) => dispatch({type: SET_TIME, payload: payload})
  // const setOrder = (payload) => dispatch({type: APP_SET_STATE, payload: payload})
  const orderAgain = () => dispatch({type: ORDER_AGAIN})

  const {deviceType, mobileStep, isAuthenticated, order} = state

  return (
    <AppContext.Provider value={{
      isMobile, setDevice, setDate, setTime, orderAgain,
      deviceType, mobileStep, isAuthenticated, order
    }}>
      {children}
    </AppContext.Provider>
  )
}