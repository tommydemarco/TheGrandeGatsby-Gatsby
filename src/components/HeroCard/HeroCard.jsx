import React from 'react'
import Img from "gatsby-image"

const HeroCard = ({ image, title, caption, className, children }) => {

    const classes = className ? "hero " + className : "hero"

    return (
        <figure className={classes}>
            <Img 
              fluid={image}
              className="hero__image" />
              <figcaption className="hero__description">
                <h3 className="hero__title">{title}</h3>
                <p className="hero__caption">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Suscipit nihil quae nisi nostrum commodi! Voluptates qui 
                  possimus similique, temporibus ex reiciendis modi aliquam 
                  harum tempore tenetur iusto quis corrupti beatae?
                  {caption}
                </p>
                {children}
              </figcaption>
          </figure>
    )
}

export default HeroCard
