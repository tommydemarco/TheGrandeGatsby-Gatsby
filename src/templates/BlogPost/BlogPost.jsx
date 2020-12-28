import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../../layout"
import Hero from "../../components/Hero"
import SEO from "../../components/SEO"

import "./BlogPost.scss"

const BlogPost = props => {
  const {
    title,
    subtitle,
    image,
    image_text,
    description,
  } = props.data.strapiPosts
  return (
    <Layout
      title={title}
      subtitle={subtitle}
      hero={<Hero image={image.childImageSharp.fluid} text={image_text} dark />}
    >
      <SEO
        title={title.toUpperCase() + " - The Grande Gatsby"}
        description={
          title + "- post page of The Grande Gatsby personal project"
        }
      />
      <div className="blogPage">
        <ReactMarkdown source={description}></ReactMarkdown>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($slug: String) {
    strapiPosts(pretty_url: { eq: $slug }) {
      title
      subtitle
      image {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image_text
      description
      category
    }
  }
`

export default BlogPost
