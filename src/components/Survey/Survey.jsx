import React, { useState, useEffect } from "react"

import LoadingSpinner from "../LoadingSpinner"

import "./Survey.scss"

const itemsList = [
  {
    id: 1,
    name: "Cities",
    icon: "fa-building",
    votes: 32,
  },
  {
    id: 2,
    name: "Nature",
    icon: "fa-leaf",
    votes: 45,
  },
]

const Survey = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setItems(itemsList)
      setIsLoading(false)
    }, 1000)
  }, [setItems, setIsLoading])

  return (
    <div className="survey">
      <h2 className="survey__title">Fancy a little survey?</h2>
      <p className="survey__subtitle">
        Let us know which one of the two is more important for you
      </p>
      <div className="survey__content">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ul className="survey__list">{renderSurveyItems(items)}</ul>
        )}
      </div>
    </div>
  )
}

const renderSurveyItems = items => {
  return items.map(item => {
    return (
      <li key={item.id} className="survey__item">
        <button type="button" className="survey__button">
          <i className="fa fa-fire"></i>
        </button>
        <div className="survey__item-description">
          <h5 className="survey__name">{item.name}</h5>
          <span className="survey__votes">{item.votes}</span>
        </div>
      </li>
    )
  })
}

export default Survey
