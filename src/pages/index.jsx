import React from 'react'
import Layout from '../layout'
import { graphql, useStaticQuery } from "gatsby"
import Button from '../components/Button'
import HeroCard from '../components/HeroCard'

import './index.scss'

const query = graphql`
  {
    file(relativePath: { eq: "skyline2.jpg" }) {
      childImageSharp {
        fluid {
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

export default HomePage
