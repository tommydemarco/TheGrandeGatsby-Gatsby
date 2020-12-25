import React, { useState } from "react"
import { Link } from "gatsby"

import Button from "../Button"
//==========> CSS
import "./TheHeader.scss"

const TheHeader = () => {
  const [menuState, setMenuState] = useState(false)

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logotoggle">
          <Link to="/" className="header__logo">
            The Great Gatsby
          </Link>
          <div
            onClick={() => setMenuState(!menuState)}
            className={
              menuState
                ? `header__toggle header__toggle--active`
                : `header__toggle`
            }
          ></div>
        </div>
        <nav
          className={
            menuState
              ? `header__navigation header__navigation--active`
              : `header__navigation`
          }
        >
          <ul className="header__list">
            <li className="header__item">
              <Link to="/blog" className="header__link">
                Blog
              </Link>
            </li>
            <li className="header__item">
              <Link to="/about" className="header__link">
                about
              </Link>
            </li>
            <li className="header__item">
              <Button additionalClass="header__button" to="/login">
                Login
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TheHeader
