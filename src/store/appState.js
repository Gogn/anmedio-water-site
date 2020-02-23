import React, {useReducer} from 'react'
import {appReducer} from "./appReducer";
import {
  APP_SET_DEVICE,
  ORDER_AGAIN,
  SET_BIG_BOTTLES, SET_CONTACT,
  SET_DATE, SET_MOBILE_STEP,
  SET_SMALL_BOTTLES1, SET_SMALL_BOTTLES2,
  SET_TIME
} from "./types";
import {AppContext} from "./appContext";

export const AppState = ({children}) => {
  const initialState = {
    deviceType: isMobile(),
    mobileStep: 2,
    isAuthenticated: true,
    order: {
      bigBottles: 0,
      smallBottles1: 0,
      smallBottles2: 0,
      date: new Date(),
      time: ''
    },
    contact: {
      name: {
        value: '',
        type: 'text',
        label: 'Name',
        errorMessage: 'Введите корректное имя',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 3
        }
      },
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: false,
          email: true
        }
      },
      phone: {
        value: '',
        type: 'phone',
        label: 'Phone',
        errorMessage: 'Введите корректный телефон',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 10
        }
      },
      address: {
        value: '',
        type: 'text',
        label: 'Address',
        errorMessage: 'Введите корректный адрес',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  // If device have a display < 600x800 pixels - deviceType===1
  function isMobile() {
    return +((window.innerWidth < 600) && (window.innerHeight < 800))
  }


  const [state, dispatch] = useReducer(appReducer, initialState)

  const setDevice = (payload) => dispatch({type: APP_SET_DEVICE, payload: payload})
  const setMobileStep = (payload) => dispatch({type: SET_MOBILE_STEP, payload: payload})
  const setDate = (payload) => dispatch({type: SET_DATE, payload: payload})
  const setTime = (payload) => dispatch({type: SET_TIME, payload: payload})
  const setContact = (payload) => dispatch({type: SET_CONTACT, payload: payload})
  const setBigBottles = () => dispatch({type: SET_BIG_BOTTLES})
  const setSmallBottles1 = (payload) => dispatch({type: SET_SMALL_BOTTLES1, payload: payload})
  const setSmallBottles2 = (payload) => dispatch({type: SET_SMALL_BOTTLES2, payload: payload})
  const orderAgain = () => dispatch({type: ORDER_AGAIN})

  const {deviceType, mobileStep, isAuthenticated, order, contact} = state

  return (
    <AppContext.Provider value={{
      isMobile, setDevice, setMobileStep, setDate, setTime, orderAgain, setContact, setBigBottles, setSmallBottles1, setSmallBottles2,
      deviceType, mobileStep, isAuthenticated, order, contact
    }}>
      {children}
    </AppContext.Provider>
  )
}