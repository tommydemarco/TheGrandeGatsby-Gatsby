import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import TopBar from "../TopBar"
//==========> CSS
import "./TheHeader.scss"

const TheHeader = () => {
  //STATE FOR THE BURGER MENU ON MOBILE DEVICES - STOPS WORKING AT RANDOM
  const [menuState, setMenuState] = useState(false)
  //STATE FOR DETECTING THE SCROLL DIRECTION - STOPS WORKING AT RANDOM
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  //USE EFFECT TO UPDATE THE SCROLL DIRECTION ON USER SCROLL - STOPS WORKING AT RANDOM
  useEffect(() => {
    let lastScrollY = window.pageYOffset
    let flag = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset
      if (Math.abs(scrollY - lastScrollY)) {
        flag = false
        return
      }
      setIsScrollingDown(
        scrollY > lastScrollY && lastScrollY > 45 ? true : false
      )
      flag = false
    }

    const handleScroll = () => {
      if (!flag) {
        window.requestAnimationFrame(updateScrollDir)
        flag = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isScrollingDown])

  const activeStyle = { color: "#ced6e0" }
  return (
    <div className={isScrollingDown ? "header compressed" : "header"}>
      <div className="header__container">
        <div className="header__logotoggle">
          <Link to="/" className="header__logo">
            The Grande Gatsby
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
              <Link
                to="/blog"
                className="header__link"
                activeStyle={activeStyle}
              >
                Blog
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/about"
                className="header__link"
                activeStyle={activeStyle}
              >
                about
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/features"
                className="header__link"
                activeStyle={activeStyle}
              >
                Features
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/services"
                className="header__link"
                activeStyle={activeStyle}
              >
                Services
              </Link>
            </li>
            <li className="header__item">
              <a
                className="header__button"
                href="https://github.com/tommydemarco/TheGreatGatsby-Gatsby"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TheHeader
