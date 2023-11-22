import AnimatedLetters from '../AnimatedLetters'
import './about.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <span className="before-text">&lt;h1&gt;</span>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <span className="after-text">&lt;/h1&gt;</span>
          <p>
            I'm a <strong className='strong'>Frontend Web Developer</strong> building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the <a href="/portfolio"> Projects section.</a>
          </p>

          <p>
            If I'm not working on projects or studying you may find me eating popcorn and watching movies with my wife and dog, hiking or cooking delicious food for friends and family.
            Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/kmarusek/">Linkedin</a> or follow me on <a href="https://github.com/kmarusek">Github</a>. 
          </p>

          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to <a href="/contact">contact me</a>.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faWordpress} color="#00749C" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default About
