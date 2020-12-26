import React, { useState } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
//=======> LAYOUT
import Layout from "../../layout"
import SEO from "../../components/SEO"
import Button from "../../components/Button"

import "./login.scss"

const LoginPage = ({ data }) => {
  const { loginImage } = data

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleLogin = async () => {
    console.log("function called")
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
      if (response.status == 401) {
        const unauthErr = new Error("Wrong username or password")
        throw unauthErr
      } else {
        const LoginError = new Error("Could not login at the moment.")
        throw LoginError
      }
    }
    console.log(responseData)
  }

  return (
    <Layout
      title="Howdy, user!"
      subtitle="Lock back in to access exclusive content"
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

export const query = graphql`
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

export default LoginPage
