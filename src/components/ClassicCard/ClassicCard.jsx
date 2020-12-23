import React from 'react'
import Button from '../Button'

const ClassicCard = ({ title, description, imagePath, functionOnClick, to = "/" }) => {

    return (
        <article className="classicCard">
            <div className="classicCard__image-container">
                <img src={imagePath} alt={''} />
            </div>
            <div className="classicCard__content">
                <h4 className="classicCard__title">
                    {title}
                </h4>
                <p className="classicCard__description">
                    {description}
                </p>
            </div>
            <footer className="classicCard__footer">
                {functionOnClick ? 
                <Button functionOnClick={functionOnClick}></Button>
                : 
                <Button to={to}></Button>
                }
            </footer>
        </article>
    )
}

export default ClassicCard
