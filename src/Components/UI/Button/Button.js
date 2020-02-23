import React, {useContext} from 'react'
import classes from './Button.module.css'
import { useHistory } from 'react-router-dom';
import {AppContext} from "../../../store/appContext";

export const Button = (props) => {
  const {mobileStep, setMobileStep} = useContext(AppContext)
  const history = useHistory();

  const cls = [
    classes.Button,
    classes[props.class]
  ]

  const handleClick = () => {
    switch (props.type) {
      case 'useHistory' :
        history.push(props.to)
        break
      case 'mobileStep' :
        setMobileStep(mobileStep+1)
        break
      default : break
    }
    props.useHistory === true && history.push(props.to)
  }

  return (
    <button
      onClick={handleClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}