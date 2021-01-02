import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
//==========> CSS
import "./TheHeader.scss"

const TheHeader = () => {
  const [menuState, setMenuState] = useState(false)

  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let flag = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset
      if (Math.abs(scrollY - lastScrollY) < threshold) {
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
                //onMouseOver={() => setSubLinksVisible(true)}
                //onMouseLeave={() => setSubLinksVisible(false)}
              >
                Features
              </Link>
              {/* <SubLinks
                status={subLinksVisible}
                setStatus={setSubLinksVisible}
              ></SubLinks> */}
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

// const SubLinks = ({ status, setStatus }) => {
//   const activeClass = status ? " active" : ""

//   return (
//     <div
//       onMouseOver={() => setStatus(true)}
//       onMouseLeave={() => setStatus(false)}
//       className={"sublinks" + activeClass}
//     >
//       <ul className="sublinks__list">
//         <li className="sublinks__item">
//           <Link to="/features/basic" className="sublinks__link">
//             about
//           </Link>
//         </li>
//         <li className="sublinks__item">
//           <Link to="/features/premium" className="sublinks__link">
//             about
//           </Link>
//         </li>
//       </ul>
//     </div>
//   )
// }

export default TheHeader
