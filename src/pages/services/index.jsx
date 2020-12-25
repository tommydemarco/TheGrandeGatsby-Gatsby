import React, { useState, useEffect } from "react"
import Layout from "../../layout"
import { graphql, useStaticQuery } from "gatsby"
import ServiceCard from "../../components/ServiceCard"
import { onlyUnique } from "../../js/helpers"
import { useSpring, animated } from "react-spring"
import SEO from "../../components/SEO"

import "./services.scss"

export const query = graphql`
  {
    allStrapiServices {
      edges {
        node {
          id
        }
      }
      nodes {
        description
        id
        title
        pretty_url
        attribute
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

const ServicesPage = () => {
  const data = useStaticQuery(query)

  const totalPages = data.allStrapiServices.nodes
    .map((value, index) => index % 2)
    .filter(onlyUnique)

  const [toggle, setToggle] = useState(true)
  const [activePage, setActivePage] = useState(0)
  const [page, setPage] = useState(0)

  const props = useSpring({ opacity: toggle ? 1 : 0 })

  const handlePageChange = pageNumber => {
    setToggle(false)
    setActivePage(pageNumber)
    setTimeout(() => {
      setPage(pageNumber)
      setToggle(true)
    }, 400)
  }

  return (
    <Layout
      title="Services section of The Grande Gatsby"
      subtitle="Welcome to our services section, what we offer to you"
    >
      <SEO
        title="Services - The Grande Gatsby"
        description="The services page of The Grande Gatsby personal project"
      />
      <section className="services">
        <animated.div
          className="services__posts"
          style={Object.assign({}, props)}
        >
          {renderServicePosts(data.allStrapiServices.nodes, page)}
        </animated.div>
        <div className="services__categories">
          {totalPages.map(value => (
            <span
              className={
                value === activePage
                  ? "services__category services__category--active"
                  : "services__category"
              }
              key={value}
              onClick={() => {
                handlePageChange(value)
              }}
            >
              {value + 1}
            </span>
          ))}
        </div>
      </section>
    </Layout>
  )
}

const renderServicePosts = (postsList, page) => {
  return postsList
    .filter((service, index) => page === index % 2)
    .map(service => {
      return <ServiceCard key={service.id} {...service} />
    })
}

export default ServicesPage
