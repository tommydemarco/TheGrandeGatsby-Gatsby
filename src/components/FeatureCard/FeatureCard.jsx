import React from "react"

import "./FeatureCard.scss"

const FeatureCard = ({ title, description, icon, category }) => {
  let premimuTag = category === "premium" ? true : false
  return (
    <article className="feature">
      {premimuTag && (
        <i className={"fa fa-fire feature__icon feature__icon--premium"}></i>
      )}
      <h3 className="feature__title">
        <i className={"fa feature__icon " + icon}></i>
        {title}
      </h3>
      <p className="feature__description">{description}</p>
    </article>
  )
}

export default FeatureCard
