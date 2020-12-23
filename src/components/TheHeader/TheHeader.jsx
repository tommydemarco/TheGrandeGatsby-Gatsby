import React, { useState } from 'react'
import { Link } from 'gatsby'
//==========> CSS
import './TheHeader.scss'

const TheHeader = () => {

  const [ menuState, setMenuState ] = useState(false)

    return (
      <div className="header">
          <div className="header__container">
            <div className="header__logotoggle">
              <Link to="/" className="header__logo">
                  The Great Gatsby
              </Link>
              <div 
                onClick={() => setMenuState(!menuState)} 
                className={menuState ? `header__toggle header__toggle--active` : `header__toggle`}>
                </div>
            </div>
              <nav className={menuState ? `header__navigation header__navigation--active` : `header__navigation`}>
                  <ul className="header__list">
                      <li className="header__item">
                          <Link to="/streams/new" className="header__link">
                              Create Stream
                          </Link>
                      </li>
                      <li className="header__item">
                          <Link to="/streams/list" className="header__link">
                              Streams List
                          </Link>
                      </li>
                      <li className="header__item">
                      </li>
                  </ul>
              </nav>
          </div> 
      </div>
  )
}

export default TheHeader
