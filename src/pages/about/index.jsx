import React from "react"
import { graphql } from "gatsby"
//=======> LAYOUT
import Layout from "../../layout"

const AboutPage = () => {
  return (
    <Layout
      title="About our gatsbyous company"
      subtitle="Discover more about what we do and where you can find us"
    >
      <section className="about"></section>
    </Layout>
  )
}

export default AboutPage
