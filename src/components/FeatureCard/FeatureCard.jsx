import React from "react"

import "./FeatureCard.scss"

const FeatureCard = ({ title, description, icon, category }) => {
  let premimuTag = category === "premium" ? true : false
  return (
    <article className="feature">
      {premimuTag && (
        <i className={"fa fa-diamond feature__icon feature__icon--premium"}></i>
      )}
      <i className={"fa feature__icon " + icon}></i>
      <h3 className="feature__title">{title}</h3>
      <p className="feature__description">{description}</p>
    </article>
  )
}

export default FeatureCard
