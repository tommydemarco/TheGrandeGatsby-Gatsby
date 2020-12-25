import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./PostCard.scss"

const PostCard = ({
  image,
  title,
  subtitle,
  pretty_url,
  description,
  className,
}) => {
  const classes = className ? "postcard " + className : "postcard"

  return (
    <figure className={classes}>
      <Img
        fluid={image.childImageSharp.fluid}
        greyscale={true}
        className="postcard__image"
      />
      <figcaption className="postcard__description">
        <h3 className="postcard__title">{title}</h3>
        <p className="postcard__subtitle">{subtitle}</p>
        <p className="postcard__preview">{description.slice(0, 150) + "..."}</p>
      </figcaption>
      <div className="postcard__footer">
        <Link to={"/blog/" + pretty_url} className="postcard__link">
          Read post
        </Link>
      </div>
    </figure>
  )
}

export default PostCard
