import React from "react"
import { StaticQuery, graphql } from "gatsby"

import './StaticFooter.scss'

const StaticFooter = () => (
  <StaticQuery
    query={graphql`
        {
        site { siteMetadata { description } }
        }
    `}
    render={data => {

        const { site: { siteMetadata: {description} } } = data
        return (
            <div className="static-footer">
                <span className="static-footer__text">
                    {description}
                </span>
            </div>
        )
    }}
  ></StaticQuery>
)

export default StaticFooter