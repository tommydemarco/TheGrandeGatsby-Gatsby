import React from "react"
import Layout from "../../layout"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../../components/Button"
import Hero from "../../components/Hero"
import SEO from "../../components/SEO"

import "./404.scss"

const query = graphql`
  {
    heroImage: file(relativePath: { eq: "skyline-hero.jpg" }) {
      childImageSharp {
        fluid(grayscale: true, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const NotFound = () => {
  const data = useStaticQuery(query)
  return (
    <Layout
      title="We are sorry"
      subtitle="We could not find what you are looking for"
      hero={
        <Hero
          image={data.heroImage.childImageSharp.fluid}
          text="oops, dead end"
        />
      }
    >
      <SEO
        title="Not Found - The Grande Gatsby"
        description="The error page of The Grande Gatsby personal project"
      />
      <Button additionalClass="notfound__button" to="/">
        Take me back home
      </Button>
    </Layout>
  )
}

export default NotFound
