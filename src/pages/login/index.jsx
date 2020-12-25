import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
//=======> LAYOUT
import Layout from "../../layout"
import SEO from "../../components/SEO"
import Button from "../../components/Button"

import "./login.scss"

const LoginPage = ({ data }) => {
  console.log(data)
  const { loginImage } = data
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
            />
            <input
              type="password"
              className="form-field animation a4"
              placeholder="Password"
            />
            <Button additionalClass="login__button" type="submit">
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
