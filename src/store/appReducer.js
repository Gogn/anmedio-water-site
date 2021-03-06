import {
  APP_SET_DEVICE,
  ORDER_AGAIN, SET_AGREE,
  SET_BIG_BOTTLES, SET_CONTACT,
  SET_DATE, SET_MOBILE_STEP,
  SET_SMALL_BOTTLES1, SET_SMALL_BOTTLES2,
  SET_TIME
} from "./types";

const handlers = {
  [APP_SET_DEVICE]: (state, {payload}) => ({...state, deviceType: payload}),
  [SET_AGREE]: (state, {payload}) => ({...state, agree: !state.agree}),
  [SET_DATE]: (state, {payload}) => ({...state, order: {...state.order, date: payload} }),
  [SET_TIME]: (state, {payload}) => ({...state, order: {...state.order, time: payload} }),
  [SET_MOBILE_STEP]: (state, {payload}) => ({...state, mobileStep: payload }),
  [SET_CONTACT]: (state, {payload}) => ({...state, contact: payload }),
  [SET_BIG_BOTTLES]: (state) => ({...state, order: {...state.order, bigBottles: state.order.bigBottles+1} }),
  [SET_SMALL_BOTTLES1]: (state) => ({...state, order: {...state.order, smallBottles1: state.order.smallBottles1+1} }),
  [SET_SMALL_BOTTLES2]: (state) => ({...state, order: {...state.order, smallBottles2: state.order.smallBottles2+1} }),
  [ORDER_AGAIN]: (state, {payload}) => ({...state, ...payload}),
  DEFAULT: state => state
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}