import React from "react"
import Layout from "../layout"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/Button"
import HeroCard from "../components/HeroCard"
import Hero from "../components/Hero"

import "./index.scss"

const query = graphql`
  {
    boxImage: file(relativePath: { eq: "skyline2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file(relativePath: { eq: "skyline-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HomePage = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <Layout
      title="Welcome to the Great Gatsby"
      subtitle="We have our roots all aroud the world, descover the place cosest to you"
      hero={
        <Hero
          image={data.file.childImageSharp.fluid}
          text="Welcome to the great gatsby"
        />
      }
    >
      <section className="home">
        <HeroCard
          image={data.boxImage.childImageSharp.fluid}
          title="Let us take you places"
          caption={null}
        >
          <Button additionalClass="hero__button" to="/products">
            DIscover more
          </Button>
        </HeroCard>
      </section>
    </Layout>
  )
}

export default HomePage
