import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
//=======> LAYOUT
import Layout from "../../layout"
import SEO from "../../components/SEO"
import InfoPopup from "../../components/InfoPopup"

import "./gallery.scss"

const Gallery = () => {
  const [popupVisible, setPopupVisible] = useState(false)

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
      <section className="gallery"></section>
    </Layout>
  )
}

export default Gallery
