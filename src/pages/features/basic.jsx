import React from "react"
import Layout from "../../layout"
import SEO from "../../components/SEO"
import { graphql } from "gatsby"

import FeatureCard from "../../components/FeatureCard"

import "./features.scss"

const BasicFeatures = ({ data }) => {
  const featuresList = data.allStrapiFeatures.nodes
  return (
    <Layout
      title="Our basic features"
      subtitle="Our basic feature don't look that basic after all, do they?"
    >
      <SEO
        title="Basic features - The Grande Gatsby"
        description="The basic features page of The Grande Gatsby personal project"
      />
      <section className="features">{renderFeatureCards(featuresList)}</section>
    </Layout>
  )
}

const renderFeatureCards = cardsList => {
  return cardsList.map(item => {
    return <FeatureCard key={item.id} {...item} />
  })
}

export const query = graphql`
  {
    allStrapiFeatures(filter: { category: { eq: "basic" } }) {
      nodes {
        category
        description
        id
        icon
        title
      }
    }
  }
`

export default BasicFeatures
