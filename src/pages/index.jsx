import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../layout"
import Button from "../components/Button"
import HeroCard from "../components/HeroCard"
import Hero from "../components/Hero"
import SEO from "../components/SEO"

import "./index.scss"

const query = graphql`
  {
    boxImage: file(relativePath: { eq: "skyline2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file(relativePath: { eq: "skyline-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blogImage: file(relativePath: { eq: "home-blog.jpg" }) {
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

  return (
    <Layout
      title="Endless possibilities with The Grande Gatsby"
      subtitle="We have our roots all aroud the world, descover the place cosest to you"
      hero={
        <Hero
          image={data.file.childImageSharp.fluid}
          text="Welcome to The Grande Gatsby"
        />
      }
    >
      <SEO
        title="Home - The Grande Gatsby"
        description="The home page of The Grande Gatsby personal project"
      />
      <section className="home">
        <HeroCard
          image={data.boxImage.childImageSharp.fluid}
          title="Let us take you places"
          caption={null}
        >
          <Button additionalClass="hero__button" to="/services">
            Discover more
          </Button>
        </HeroCard>
        <HeroCard
          image={data.blogImage.childImageSharp.fluid}
          title="Inspiring articles in our blog"
          caption={null}
        >
          <Button additionalClass="hero__button" to="/blog">
            Browse the articles
          </Button>
        </HeroCard>
      </section>
    </Layout>
  )
}

export default HomePage
