import React from "react"
import { Helmet } from "react-helmet"
//========> COMPONENTS
import TheFooter from "../components/TheFooter"
import ToastMessage from "../components/ToastMessage"
//=======> CSS
import "./Layout.scss"

const Layout = ({ children, title, subtitle, hero }) => {
  return (
    <>
      <Helmet>
        <script src="https://use.fontawesome.com/bc2438d946.js"></script>
      </Helmet>
      {hero}
      <div className="content">
        {title && <h1 className="content__title">{title}</h1>}
        {subtitle && <p className="content__subtitle">{subtitle}</p>}
        {children}
      </div>
      <div className="toast-stack">
        <ToastMessage
          title="The first toast"
          message="The message of the toast, great"
          type="success"
        />
        <ToastMessage
          title="The first toast"
          message="The message of the toast, great"
          type="success"
        />
      </div>
      <TheFooter />
    </>
  )
}

export default Layout
