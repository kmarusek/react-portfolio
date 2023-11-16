import './portfolio.scss'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import React from 'react'
import { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="image-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <div className="text-wrap">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button className="btn" onClick={() => window.open(port.url)}>
                    View
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container portfolio-page">
      <div className="text-zone">
        <span className="before-text">&lt;h1&gt;</span>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
            idx={15}
          />
        </h1>
        <span className="after-text">&lt;/h1&gt;</span>
      </div>
      <div className="project-wrap">
        {renderPortfolio(portfolioData.portfolio)}
      </div>
    </div>
  )
}

export default Portfolio
