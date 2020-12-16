import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
//==========> CSS
import './TheHeader.scss'

const query = graphql`
{
  site {
    siteMetadata {
      title
      description
      data
      person {
        name
      }
    }
  }
}
`

const TheHeader = () => {

    const { site: {siteMetadata: { title }}} = useStaticQuery(query)

    return (
      <div className="header">
          <div className="header__container">
              <Link to="/" className="header__logo">
                  The Great Gatsby
              </Link>
              <nav className="header__navigation">
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
