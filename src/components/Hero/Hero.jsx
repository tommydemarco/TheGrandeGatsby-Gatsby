import React from "react"
import Immagine from "gatsby-image"
import "./Hero.scss"

const Hero = ({ image, text, dark }) => {
  const darkClass = dark ? " introHero__image--dark" : ""
  return (
    <div className="introHero">
      <Immagine className={"introHero__image" + darkClass} fluid={image} />
      <span className="introHero__text">{text}</span>
    </div>
  )
}

export default Hero
