import React, { useState, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { userContext } from "../../context/context"
import { connect } from "react-redux"
import { loggedIn, logInFailed } from "../../redux/login/login-actions"

import Layout from "../../layout"
import SEO from "../SEO"
import Button from "../Button"
import Image from "gatsby-image"

const Login = ({ page, loggedIn, logInFailed }) => {
  const { loginImage } = useStaticQuery(query)

  const { state, dispatch } = useContext(userContext)

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleLogin = async () => {
    const response = await fetch(
      "https://djshortcats.website/api/azienda/api/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        }),
      }
    )
    const responseData = await response.json()

    if (!response.ok) {
      logInFailed()
      return
    }

    dispatch({
      type: "LOGIN",
      payload: { user: credentials.username, jwt: responseData },
    })
    loggedIn(credentials.username)
  }

  return (
    <Layout
      title="Sorry, authentication required"
      subtitle={"You need to be logged in to visit the " + page + "page"}
    >
      <SEO
        title="Login - The Grande Gatsby"
        description="The login page of The Grande Gatsby personal project"
      />
      <section className="login">
        <div className="login__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            nihil quae nisi nostrum commodi! Voluptates qui possimus similique,
            temporibus ex reiciendis modi aliquam harum tempore tenetur iusto
            quis corrupti beatae?
          </p>
          <div className="form">
            <input
              type="email"
              className="form-field animation a3"
              placeholder="Email Address"
              value={credentials.username}
              onChange={e =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
            <input
              type="password"
              className="form-field animation a4"
              placeholder="Password"
              value={credentials.password}
              onChange={e =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <Button
              additionalClass="login__button"
              type="button"
              functionOnClick={handleLogin}
            >
              LOGIN
            </Button>
          </div>
        </div>
        <Image
          fluid={loginImage.childImageSharp.fluid}
          className="login__image"
        />
      </section>
    </Layout>
  )
}

const query = graphql`
  {
    loginImage: file(relativePath: { eq: "login-image.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

Login.defaultProps = {
  page: "",
}

const mapDispatchToProps = dispatch => {
  return {
    loggedIn: userName => dispatch(loggedIn(userName)),
    logInFailed: () => dispatch(logInFailed()),
  }
}

export default connect(null, mapDispatchToProps)(Login)
