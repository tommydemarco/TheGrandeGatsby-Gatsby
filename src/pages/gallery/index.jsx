import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
//=======> LAYOUT
import Layout from "../../layout"
import SEO from "../../components/SEO"
import InfoPopup from "../../components/InfoPopup"
import GalleryItem from "../../components/GalleryItem/GalleryItem"

import "./gallery.scss"

const Gallery = ({ data }) => {
  const [popupVisible, setPopupVisible] = useState(false)

  const { nodes: galleryImages } = data.allStrapiGalleries
  console.log(galleryImages)

  useEffect(() => {
    setTimeout(() => {
      setPopupVisible(true)
    }, 2000)
  }, [])

  return (
    <Layout
      title="Our best pictures"
      subtitle="Get mesmerized by these amazing photos"
    >
      {popupVisible && (
        <InfoPopup visible={false} setPopupVisible={setPopupVisible} />
      )}
      <SEO
        title="Gallery - The Grande Gatsby"
        description="The gallery page of The Grande Gatsby personal project"
      />

      <section className="gallery">
        <ul className="gallery__list">
          {renderGalleryImages(galleryImages)}
          {/* <li className="gallery__item">{loremIpsum} </li>
          <li className="gallery__item">{loremIpsum} </li>
          <li className="gallery__item">
      
          </li>
          <li className="gallery__item">{loremIpsum}</li> */}
        </ul>
      </section>
    </Layout>
  )
}

const renderGalleryImages = items => {
  return items.map(item => {
    return (
      <li key={item.id} className="gallery__item">
        <GalleryItem {...item} />
      </li>
    )
  })
}

export const query = graphql`
  {
    allStrapiGalleries {
      edges {
        node {
          id
        }
      }
      nodes {
        img_description
        width
        align
        id
        img {
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

const loremIpsum =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"

export default Gallery
