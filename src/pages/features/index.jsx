import React, { useState } from "react"
import Layout from "../../layout"
import SEO from "../../components/SEO"
import { graphql } from "gatsby"
import { onlyUnique } from "../../js/helpers"
import { useSpring, animated } from "react-spring"

import Slider from "../../components/Slider"
import FeatureCard from "../../components/FeatureCard"

import "./features.scss"

const BasicFeatures = ({ data }) => {
  const featuresList = data.allStrapiFeatures.nodes

  const categories = featuresList.map(post => post.category).filter(onlyUnique)
  const [allCategories, setAllCategories] = useState(true)
  const [allCategoriesInstant, setAllCategoriesInstant] = useState(true)

  const [category, setCategory] = useState(categories[0])
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const [toggle, setToggle] = useState(true)

  const handleCategoryChange = category => {
    setToggle(false)
    setTimeout(() => {
      if (category !== true) {
        setCategory(category)
        setAllCategories(false)
      } else {
        setAllCategories(true)
      }
      setToggle(true)
    }, 400)
  }

  const props = useSpring({ opacity: toggle ? 1 : 0 })

  return (
    <Layout
      title="Our features for a globalized world"
      subtitle="Our basic feature don't look that basic after all, do they?"
      hero={<Slider images={data.allStrapiSliders.nodes} />}
    >
      <SEO
        title="Basic features - The Grande Gatsby"
        description="The basic features page of The Grande Gatsby personal project"
      />
      <section className="features">
        <div className="blog__categories">
          <span
            className={
              allCategoriesInstant
                ? "blog__category blog__category--active"
                : "blog__category"
            }
            key={"all"}
            onClick={() => {
              setAllCategoriesInstant(true)
              handleCategoryChange(true)
            }}
          >
            ALL
          </span>
          {categories.map(singleCategory => {
            return (
              <span
                className={
                  singleCategory === activeCategory && !allCategoriesInstant
                    ? "blog__category blog__category--active"
                    : "blog__category"
                }
                key={singleCategory}
                onClick={() => {
                  setAllCategoriesInstant(false)
                  setActiveCategory(singleCategory)
                  handleCategoryChange(singleCategory)
                }}
              >
                {singleCategory}
              </span>
            )
          })}
        </div>
        <animated.div
          className="features__content"
          style={Object.assign({}, props)}
        >
          {renderFeatureCards(featuresList, category, allCategories)}
        </animated.div>
      </section>
    </Layout>
  )
}

const renderFeatureCards = (cardsList, category, returnAll) => {
  return cardsList
    .filter(item => returnAll || item.category === category)
    .map(item => {
      return <FeatureCard key={item.id} {...item} />
    })
}

export const query = graphql`
  {
    allStrapiFeatures {
      nodes {
        category
        description
        id
        icon
        title
      }
    }
    allStrapiSliders {
      nodes {
        id
        image {
          childImageSharp {
            fluid(grayscale: true, maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image_text
      }
    }
  }
`

export default BasicFeatures
