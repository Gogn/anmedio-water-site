import React, {useContext} from 'react'
import {AppContext} from "../../../store/appContext";
import moment from "moment";
import 'moment/locale/ru'

export const OrderList = () => {
  const {order, contact} = useContext(AppContext)
  moment.locale('ru')

  const items = Items()

  return (
    <div>
      {items.map((item, key) =>
        React.cloneElement(item, {key})
      )}
      <p>{moment(order.date).format('D MMMM')}<span>{order.time}</span></p>
      <div className="rule-15"/>
      <p>Адрес доставки<span>{contact.address.value}</span></p>
      <div className="rule-15"/>
      <p>Телефон<span>{contact.phone.value}</span></p>
    </div>
  )
}

const Items = () => {
  const {order} = useContext(AppContext)

  let items = []

    if (order.bigBottles) {
      items.push(
        <>
        <p>Бутыль 18,9 л<span>{order.bigBottles} шт</span></p>
        <div className="rule-15"/>
        </>
      )
    }
  if (order.smallBottles1) {
    items.push(
      <>
        <p>Ящик бутылок (6 шт) по 1,5 л<span>{order.smallBottles1} шт</span></p>
        <div className="rule-15"/>
      </>
    )
  }
  if (order.smallBottles2) {
    items.push(
      <>
        <p>Ящик бутылок (12 шт) по 1,5 л<span>{order.smallBottles2} шт</span></p>
        <div className="rule-15"/>
      </>
    )
  }

    return (items)
}