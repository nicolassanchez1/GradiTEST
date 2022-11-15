import React from 'react'
import { IButtonProps } from '.'
import './Button.scss'

export const Button: React.FC<IButtonProps> = ({ black = false, text, type = 'button', onClick }) => {
  return (
    <button className={`button pointer ${black ? 'black-button' : ''}`} type={type} onClick={onClick}>
      {text}
    </button>
  )
}
