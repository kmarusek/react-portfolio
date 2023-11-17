import './portfolio.scss';
import AnimatedLetters from '../AnimatedLetters';
import React from 'react';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore/lite';
import { db } from '../../firebase';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection( db, 'portfolio'));
    // console.log(querySnapshot);
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
  }


  console.log(portfolio);
  const renderPortfolio = (portfolio) => {
    return (
      <div className="image-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <div className="text-wrap">
                  <p className="title">{port.name}</p>
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
            className="page-title"
          />
        </h1>
        <span className="after-text">&lt;/h1&gt;</span>
      </div>
      <div className="project-wrap">
        {renderPortfolio(portfolio)}
      </div>
    </div>
  )
}

export default Portfolio
