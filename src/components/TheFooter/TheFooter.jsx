import React from "react"
import { Link } from "gatsby"
import LowerFooter from "../LowerFooter"

import "./TheFooter.scss"

export default function TheFooter() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__main">
            <div className="footer__single">
              <h4 className="footer__title">about us</h4>
              <p className="footer__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                labore atque, modi, incidunt ea odio voluptas quod voluptatem,
                eum iusto dolores vero autem. <br />
                Incidunt ea odio voluptas quod voluptatem.
              </p>
            </div>
            <div className="footer__single">
              <h4 className="footer__title">technoligies</h4>
              <ul className="footer__list">
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <a href="https://www.gatsbyjs.com/" className="footer__link">
                    Gatsby JS
                  </a>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <a href="https://reactjs.org/" className="footer__link">
                    React JS
                  </a>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <a href="https://graphql.org/" className="footer__link">
                    Graphql
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__single">
              <h4 className="footer__title">Privacy</h4>
              <ul className="footer__list">
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link to="/privacy" className="footer__link">
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link to="/privacy/cookies" className="footer__link">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__single">
              <h4 className="footer__title">links</h4>
              <ul className="footer__list">
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <a
                    href="https://github.com/tommydemarco/TheGreatGatsby-Gatsby"
                    className="footer__link"
                  >
                    Github repo
                  </a>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <a href="https://strapi.io/" className="footer__link">
                    Strapi backend
                  </a>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <a href="https://www.pexels.com/" className="footer__link">
                    Pexels
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <LowerFooter />
    </>
  )
}
