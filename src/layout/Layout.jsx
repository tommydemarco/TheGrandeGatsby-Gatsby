import React from 'react'
//========> COMPONENTS 
import TheFooter from '../components/TheFooter'
import TheHeader from '../components/TheHeader'
//=======> CSS
import './Layout.scss'

const Layout = ({children}) => {
    return (
        <>
           <TheHeader />
                <div className="content">
                    {children}
                </div>
           <TheFooter />
        </>
    )
}

export default Layout
