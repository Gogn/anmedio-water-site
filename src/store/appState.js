import React, {useReducer} from 'react'
import {appReducer} from "./appReducer";
import {
  APP_SET_DEVICE,
  ORDER_AGAIN,
  SET_BIG_BOTTLES,
  SET_DATE,
  SET_SMALL_BOTTLES,
  SET_SMALL_BOTTLES1, SET_SMALL_BOTTLES2,
  SET_TIME
} from "./types";
import {AppContext} from "./appContext";

export const AppState = ({children}) => {
  const initialState = {
    deviceType: isMobile(),
    mobileStep: 1,
    isAuthenticated: false,
    order: {
      bigBottles: 0,
      smallBottles1: 0,
      smallBottles2: 0,
      date: new Date(),
      time: ''
    }
  }

  function isMobile() {
    return ((window.innerWidth < 600) && (window.innerHeight < 600))
  }


  const [state, dispatch] = useReducer(appReducer, initialState)

  const setDevice = (payload) => dispatch({type: APP_SET_DEVICE, payload: payload})
  const setDate = (payload) => dispatch({type: SET_DATE, payload: payload})
  const setTime = (payload) => dispatch({type: SET_TIME, payload: payload})
  const setBigBottles = () => dispatch({type: SET_BIG_BOTTLES})
  const setSmallBottles1 = (payload) => dispatch({type: SET_SMALL_BOTTLES1, payload: payload})
  const setSmallBottles2 = (payload) => dispatch({type: SET_SMALL_BOTTLES2, payload: payload})
  const orderAgain = () => dispatch({type: ORDER_AGAIN})

  const {deviceType, mobileStep, isAuthenticated, order} = state

  return (
    <AppContext.Provider value={{
      isMobile, setDevice, setDate, setTime, orderAgain, setBigBottles, setSmallBottles1, setSmallBottles2,
      deviceType, mobileStep, isAuthenticated, order
    }}>
      {children}
    </AppContext.Provider>
  )
}