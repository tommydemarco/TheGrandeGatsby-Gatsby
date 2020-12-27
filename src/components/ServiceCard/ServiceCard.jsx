import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Button from "../Button"

import "./ServiceCard.scss"

const ServiceCard = ({ image, title, description, attribute, url }) => {
  return (
    <article className="serviceCard">
      <div className="serviceCard__image-container">
        <span className="serviceCard__attribute">{attribute}</span>
        <Img
          fluid={image.childImageSharp.fluid}
          className="serviceCard__image"
        />
      </div>

      <div className="serviceCard__content">
        <h3 className="serviceCard__title">{title}</h3>
        <p className="serviceCard__description">
          <ReactMarkdown
            source={description.slice(0, 640) + "..."}
          ></ReactMarkdown>
        </p>
        <Button additionalClass="serviceCard__button" to={"services/" + url}>
          Go to service
        </Button>
      </div>
    </article>
  )
}

export default ServiceCard
