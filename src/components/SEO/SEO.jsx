import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: {
        person: { name, surname },
      },
    },
  } = useStaticQuery(metadataQuery)
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta name="description" content={description} />
      <meta name="author" content={name + " " + surname} />
    </Helmet>
  )
}

const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        person {
          name
          surname
        }
      }
    }
  }
`

export default SEO
