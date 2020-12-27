import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../../layout"
import Hero from "../../components/Hero"
import SEO from "../../components/SEO"

import "./ServicePost.scss"

const BlogPost = props => {
  console.log(props)
  const {
    title,
    subtitle,
    image,
    image_text,
    description,
  } = props.data.strapiServices
  return (
    <Layout hero={<Hero image={image.childImageSharp.fluid} text={title} />}>
      <SEO
        title={title.toUpperCase() + " - The Grande Gatsby"}
        description={
          title + "- service page of The Grande Gatsby personal project"
        }
      />
      <div className="blogPage">
        <ReactMarkdown source={description}></ReactMarkdown>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleService($slug: String) {
    strapiServices(pretty_url: { eq: $slug }) {
      title
      image {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      description
    }
  }
`

export default BlogPost
