import {
  APP_SET_DEVICE,
  ORDER_AGAIN,
  SET_BIG_BOTTLES,
  SET_DATE,
  SET_SMALL_BOTTLES,
  SET_SMALL_BOTTLES1, SET_SMALL_BOTTLES2,
  SET_TIME
} from "./types";

const handlers = {
  [APP_SET_DEVICE]: (state, {payload}) => ({...state, deviceType: payload}),
  [SET_DATE]: (state, {payload}) => ({...state, order: {...state.order, date: payload} }),
  [SET_TIME]: (state, {payload}) => ({...state, order: {...state.order, time: payload} }),
  [SET_BIG_BOTTLES]: (state) => ({...state, order: {...state.order, bigBottles: state.order.bigBottles+1} }),
  [SET_SMALL_BOTTLES1]: (state) => ({...state, order: {...state.order, smallBottles1: state.order.smallBottles1+1} }),
  [SET_SMALL_BOTTLES2]: (state) => ({...state, order: {...state.order, smallBottles2: state.order.smallBottles2+1} }),
  [ORDER_AGAIN]: () => null,
  DEFAULT: state => state
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}