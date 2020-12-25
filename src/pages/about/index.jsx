import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
//=======> LAYOUT
import Layout from "../../layout"

import "./about.scss"

const AboutPage = ({ data }) => {
  console.log(data.about)
  const { title, subtitle, description, image } = data.about.nodes[0]
  return (
    <Layout title={title} subtitle={subtitle}>
      <section className="about">
        <Image fluid={image.childImageSharp.fluid} className="about__image" />
        <div className="about__description">
          <ReactMarkdown source={description}></ReactMarkdown>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        description
        subtitle
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1800, grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default AboutPage
