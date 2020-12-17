import React from 'react'
import { Link } from 'gatsby'
import './Button.scss'

const Button = ({functionOnClick, type = 'button', button = true, additionalClass = '', to = "/", children}) => {

    const classes = "button" + ' ' + additionalClass

    if(button) {
        return (
            <button type={type} className={classes} onClick={functionOnClick}>
                {children}
            </button>
        )
    } else {
        return (
            <Link className={classes} to={to}>
                {children}
            </Link>
        )
    }  
}

export default Button
