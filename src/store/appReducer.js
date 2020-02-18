import {APP_SET_DEVICE, ORDER_AGAIN, SET_DATE, SET_TIME} from "./types";

const handlers = {
  [APP_SET_DEVICE]: (state, {payload}) => ({...state, deviceType: payload}),
  [SET_DATE]: (state, {payload}) => ({...state, order: {...state.order, date: payload} }),
  [SET_TIME]: (state, {payload}) => ({...state, order: {...state.order, time: payload} }),
  [ORDER_AGAIN]: () => null,
  DEFAULT: state => state
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}