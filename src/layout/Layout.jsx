import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"
import { removeLoginMessage } from "../redux/login/login-actions"
import CookieConsent, { Cookies } from "react-cookie-consent"
//========> COMPONENTS
import TheFooter from "../components/TheFooter"
import ToastMessage from "../components/ToastMessage"

import GlobalHeader from "../components/GlobalHeader"
//=======> CSS
import "./Layout.scss"

const Layout = ({ children, title, subtitle, hero, loginMessages }) => {
  return (
    <>
      <Helmet>
        <script src="https://use.fontawesome.com/bc2438d946.js"></script>
      </Helmet>
      <CookieConsent>
        This website uses cookies to enhance the user experience.&nbsp;
        <Link to="/privacy/cookies">Cookies policy</Link>
      </CookieConsent>
      <GlobalHeader />
      <div className="wrapper">
        {hero}
        <div className="content">
          {title && <h1 className="content__title">{title}</h1>}
          {subtitle && <p className="content__subtitle">{subtitle}</p>}
          {children}
        </div>
        {loginMessages && (
          <div className="toast-stack">
            {renderLoginMessages(loginMessages)}
          </div>
        )}
        <TheFooter />
      </div>
    </>
  )
}

const renderLoginMessages = messagesList => {
  return messagesList.map(message => (
    <ToastMessage {...message} key={message.id} />
  ))
}

const mapStateToProps = state => {
  return {
    loginMessages: state.login.loginMessages,
  }
}

export default connect(mapStateToProps)(Layout)
