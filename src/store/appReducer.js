import {APP_SET_DEVICE, ORDER_AGAIN} from "./types";

const handlers = {
  [APP_SET_DEVICE]: (state, {payload}) => ({...state, deviceType: payload}),
  [ORDER_AGAIN]: () => null,
  DEFAULT: state => state
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}