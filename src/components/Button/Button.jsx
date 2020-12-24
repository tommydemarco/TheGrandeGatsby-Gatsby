import React from 'react'
import { Link } from 'gatsby'
import './Button.scss'

const Button = ({functionOnClick, type = 'button', additionalClass = '', to, children}) => {

    const classes = "button" + ' ' + additionalClass

    if(!to) {
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
