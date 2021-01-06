import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
//=======> LAYOUT
import Layout from "../../layout"
import SEO from "../../components/SEO"

import "./gallery.scss"

const gallery = () => {
  return (
    <Layout
      title="Our best pictures"
      subtitle="Get mesmerized by these amazing photos"
    >
      <SEO
        title="Gallery - The Grande Gatsby"
        description="The gallery page of The Grande Gatsby personal project"
      />
      <section className="gallery"></section>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     about: allStrapiAbout {
//       nodes {
//         description
//         subtitle
//         title
//       }
//     }
//   }
// `

export default gallery
