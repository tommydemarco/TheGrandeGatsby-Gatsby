import React from "react"
import Immagine from "gatsby-image"
import "./Slider.scss"

const Hero = ({ image, text }) => {
  return (
    <div className="introHero">
      <Immagine className="introHero__image" fluid={image} />
      <span className="introHero__text">{text}</span>
    </div>
  )
}

export default Hero
