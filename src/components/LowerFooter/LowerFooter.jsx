import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './LowerFooter.scss'

const titleQuery = graphql`
    {site {
        siteMetadata {
            title
        }
    }}
`

const LowerFooter = () => {

    const { site: { siteMetadata: { title }}} = useStaticQuery(titleQuery)

    return (
        <div className="lower-footer">
            <span className="lower-footer__text">A GatsbyJS personal project - {title}</span>
        </div>
    )
}

export default LowerFooter
