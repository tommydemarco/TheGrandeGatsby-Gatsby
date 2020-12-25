import React from "react"
import { Link } from "gatsby"
import LowerFooter from "../LowerFooter"
import StaticFooter from "../StaticFooter"

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
                eum iusto dolores vero autem.
              </p>
              <div className="footer__social">
                <Link to="/" className="footer__social-link">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="/" className="footer__social-link">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="/" className="footer__social-link">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="/" className="footer__social-link">
                  <i className="fa fa-facebook"></i>
                </Link>
              </div>
            </div>
            <div className="footer__single">
              <h4 className="footer__title">main menu</h4>
              <ul className="footer__list">
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link href="/" className="footer__link">
                    link
                  </Link>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link href="/" className="footer__link">
                    link
                  </Link>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link href="/" className="footer__link">
                    link
                  </Link>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link href="/" className="footer__link">
                    link
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__single">
              <h4 className="footer__title">Privacy</h4>
              <ul className="footer__list">
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link href="/" className="footer__link">
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link href="/" className="footer__link">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__single">
              <h4 className="footer__title">contact us</h4>
              <ul className="footer__list">
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link href="/" className="footer__link">
                    link
                  </Link>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link href="/" className="footer__link">
                    link
                  </Link>
                </li>
                <li className="footer__listitem">
                  <i className="fa fa-chevron-right"></i>
                  <Link href="/" className="footer__link">
                    link
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <LowerFooter />
      <StaticFooter />
    </>
  )
}
