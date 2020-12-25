import React, { useState, useEffect } from "react"
import Layout from "../../layout"
import { graphql, useStaticQuery } from "gatsby"
import PostCard from "../../components/PostCard"
import { onlyUnique } from "../../js/helpers"
import { useSpring, animated } from "react-spring"

import "./blog.scss"

export const query = graphql`
  {
    allStrapiPosts {
      edges {
        node {
          id
        }
      }
      nodes {
        description
        id
        in_home
        image_text
        published_at
        subtitle
        title
        pretty_url
        category
        image {
          childImageSharp {
            fluid(grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const BlogPage = () => {
  const data = useStaticQuery(query)

  const categories = data.allStrapiPosts.nodes
    .map(post => post.category)
    .filter(onlyUnique)

  const [category, setCategory] = useState(categories[0])
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const [toggle, setToggle] = useState(true)

  const handleCategoryChange = category => {
    setToggle(false)
    setTimeout(() => {
      setCategory(category)
      setToggle(true)
    }, 400)
  }

  const props = useSpring({ opacity: toggle ? 1 : 0 })

  return (
    <Layout
      title="Blog section of the Great Gatsby"
      subtitle="Welcome to our blog section, we hope our articles will inspire you"
    >
      <section className="blog">
        <div className="blog__categories">
          {categories.map(singleCategory => {
            return (
              <span
                className={
                  singleCategory == activeCategory
                    ? "blog__category blog__category--active"
                    : "blog__category"
                }
                key={singleCategory}
                onClick={() => {
                  setActiveCategory(singleCategory)
                  handleCategoryChange(singleCategory)
                }}
              >
                {singleCategory}
              </span>
            )
          })}
        </div>
        <animated.div className="blog__posts" style={Object.assign({}, props)}>
          {renderBlogPosts(data.allStrapiPosts.nodes, category)}
        </animated.div>
      </section>
    </Layout>
  )
}

const renderBlogPosts = (postsList, category) => {
  return postsList
    .filter(post => post.category === category)
    .map(post => {
      return <PostCard key={post.id} {...post} />
    })
}

export default BlogPage
