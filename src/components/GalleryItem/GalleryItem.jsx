import React from "react"

import Img from "gatsby-image"

import "./GalleryItem.scss"

const GalleryItem = ({ img, img_description, width, align }) => {
  const baseClasses = ["GalleryItem"]
  if (typeof width === "number" && width >= 5 && width <= 10) {
    baseClasses.push("GalleryItem--" + width)
  }
  if (align === "left" || align === "right" || align === "center") {
    baseClasses.push("GalleryItem--" + align)
  }

  return (
    <div className={baseClasses.join(" ")}>
      <Img fluid={img.childImageSharp.fluid} className="GalleryItem__image" />
      <p className="GalleryItem__description">{img_description}</p>
    </div>
  )
}

export default GalleryItem
