import AnimatedLetters from '../AnimatedLetters/animatedLetters'
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit, velit nec condimentum facilisis, odio mi rutrum purus,
            sit amet consectetur felis mi non nibh. Curabitur dignissim diam eu
            ipsum tristique scelerisque. Aliquam elementum felis tortor, quis
            imperdiet mi porta a. Nulla id lorem orci. Duis non massa sed tellus
            dignissim convallis nec sed nulla. Suspendisse rutrum mauris arcu,
            facilisis ornare magna tempor mollis. Aenean ac euismod neque.
            Integer scelerisque nisi quis purus convallis, at volutpat nibh
            egestas. Quisque vel bibendum nisi, at sodales nisi. Donec vehicula
            lobortis luctus. Vestibulum eu ultricies urna, quis auctor nulla.
            Donec tincidunt tristique diam non convallis. Etiam sit amet aliquam
            elit. Donec dictum metus tempus cursus suscipit. Sed blandit blandit
            justo et sagittis. Sed ultrices, felis id gravida gravida, nibh
            lectus dignissim augue, id vehicula elit nibh sit amet eros.
          </p>
          <p>
            Phasellus vehicula mi vitae massa placerat ullamcorper. Ut sed quam
            a ligula cursus elementum. Etiam varius neque nec sapien porttitor,
            ac pulvinar diam efficitur. Vivamus volutpat orci a erat consequat
            luctus. Nam vel erat lectus. Nam molestie felis ac quam fringilla,
            fermentum auctor erat convallis. Aliquam tincidunt, neque a vehicula
            feugiat, mauris velit tempor massa, ut aliquam felis ipsum eget
            dolor. Integer auctor nibh a neque rhoncus, eget gravida eros
            tempor. Vivamus metus tellus, maximus et risus ac, ultricies
            suscipit mi. Cras eget metus at sapien porta faucibus et sed ipsum.
          </p>
          <p>
            In quis ligula luctus augue tempor euismod posuere vel turpis. Donec
            rutrum ultrices justo quis bibendum. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
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
