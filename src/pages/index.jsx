import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import ClassicCard from '../components/ClassicCard'

const HomePage = ({ query }) => {

  return (
    <Layout 
      title='Welcome to the Great Gatsby' 
      subtitle="We have our roots all aroud the world, descover the place cosest to you"
      >
      
    </Layout>
  )
}

const renderCards = () => {
  return <ClassicCard />
}

export const query = graphql`
  {
    allFile {
      totalCount
      edges {
        node {
          size
          absolutePath
        }
      }
    }
  }
`

export default HomePage
