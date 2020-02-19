import React from 'react'
import classes from './Button.module.css'
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";

export const Button = (props) => {
  const history = useHistory();

  const cls = [
    classes.Button,
    classes[props.type]
  ]

  const handleClick = () => {
    history.push(props.to)
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