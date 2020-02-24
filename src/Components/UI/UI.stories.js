import React, {useContext} from 'react';
import Promo from "../Forms/Promo/Promo";
import Input from "./Input/Input";
import {Button} from "./Button/Button";
import {AppState} from "../../store/appState";
import {addDecorator} from "@storybook/react";
import {AppContext} from "../../store/appContext";

export default {
  title: 'UI',
  decorators: [storyFn => {
    return ( <AppState>{storyFn()}</AppState> )
}]
};

const Wrapper = ({children}) => <AppState>{children}</AppState>


export const Promo_Promo = () => (
  <Promo/>
)

export const UI_Button = () => {
const {mobileStep, setMobileStep} = useContext(AppContext)
  return (
    <Button
      text='Заказать воду'
      class='blue'
      type='mobileStep'
    />
)
}


export const UI_Input = () => {
  return (
 <Input
   key={1}
   type={'name'}
   value={'name'}
   valid={'true'}
   touched={'true'}
   label={'name'}
   errorMessage={'error'}
   id={1}
 />
)
}