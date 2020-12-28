import React, { useState } from "react"
import Immagine from "gatsby-image"
import { useSpring, animated } from "react-spring"
import "./Slider.scss"

const Hero = ({ images }) => {
  const [index, setIndex] = useState(false)
  const [fastIndex, setFastIndex] = useState(false)

  const [toggle, setToggle] = useState(true)
  const props = useSpring({ opacity: toggle ? 1 : 0 })

  const changeSlide = () => {
    setFastIndex(!fastIndex)
    setToggle(false)
    setTimeout(() => {
      setIndex(!index)
      setToggle(true)
    }, 600)
  }

  return (
    <div className="introSlider">
      <Immagine
        className="introSlider__fast-image"
        fluid={!fastIndex ? getImageFluid(images[1]) : getImageFluid(images[0])}
      />
      <animated.div
        className="introSlider__container"
        style={Object.assign({}, props)}
      >
        <Immagine
          className="introSlider__image"
          fluid={index ? getImageFluid(images[0]) : getImageFluid(images[1])}
        />
        <span className="introSlider__text">
          {index ? getSliderText(images[0]) : getSliderText(images[1])}
        </span>
      </animated.div>
      <i
        onClick={changeSlide}
        className="fa fa-chevron-right introSlider__arrow introSlider__arrow--right"
      ></i>
      <i
        onClick={changeSlide}
        className="fa fa-chevron-left introSlider__arrow introSlider__arrow--left"
      ></i>
    </div>
  )
}

const getImageFluid = object => {
  return object.image.childImageSharp.fluid
}
const getSliderText = object => {
  return object.image_text
}

export default Hero
