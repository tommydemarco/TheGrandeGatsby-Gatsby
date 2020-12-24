import React from 'react'
//========> COMPONENTS 
import TheFooter from '../components/TheFooter'
import TheHeader from '../components/TheHeader'
//=======> CSS
import './Layout.scss'

const Layout = ({children, title, subtitle}) => {
    return (
        <>
           <TheHeader />
                <div className="content">
                    {title && <h1 className="content__title">{title}</h1>}
                    {subtitle && <p className="content_subtitle">{subtitle}</p>}
                    {children}
                </div>
           <TheFooter />
        </>
    )
}

export default Layout
