import React from 'react'
import Layout from '../../layout'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Button from '../../components/Button'
import HeroCard from '../../components/ClassicCard'

import './index.scss'

const HomePage = ({ data }) => {

  return (
    <Layout 
      title='Welcome to the Great Gatsby' 
      subtitle="We have our roots all aroud the world, descover the place cosest to you"
      >
        <section className="home">
          <HeroCard 
            image={data.file.childImageSharp.fluid} 
            title="Let us take you places"
            caption={null}>
            <Button additionalClass="hero__button" to="/products">DIscover more</Button>
          </HeroCard>
          
        </section>     
    </Layout>
  )
}

const renderCards = () => {
  return <ClassicCard />
}

export const query = graphql`
  query {
    file(relativePath: { eq: "skyline2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HomePage
