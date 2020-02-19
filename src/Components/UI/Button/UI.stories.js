import React from 'react';
import { action } from '@storybook/addon-actions';
import {Contact} from "../../Forms/Contact/Contact";
import Promo from "../../Forms/Promo/Promo";
import {Bill} from "../../Forms/Select/Bill/Bill";
import {DatePicker} from "../../Forms/Select/Date/Date";
import {Water} from "../../Forms/Select/Water/Water";
import {Counter} from "../../Forms/Select/Water/Counter";
import {Select} from "../../Forms/Select/Select";

export default {
  title: 'Forms',
};

export const Contact_Contact =() => (
  <Contact/>
)


export const Promo_Promo =() => (
  <Promo/>
)


export const Select_Select =() => (
  <Select/>
)


export const Select_Bill_Bill =() => (
  <Bill/>
)


export const Select_Date_Date =() => (
  <DatePicker/>
)


export const Select_Water_Water =() => (
  <Water/>
)


export const Select_Water_Counter =() => (
  <Counter/>
)

