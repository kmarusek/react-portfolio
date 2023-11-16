import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-m-blue.png';
import { Loader } from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import Logo from './Logo/logo';
import "./home.scss";

const Home = () => {
   const [ letterClass, setLetterClass] = useState('text-animate')
   const nameArray = ['a','r','u','s','e','k']
   // const jobArray2 = [ 't','e','c','h','n','o','l','o','g','y',' ','s','o','l','u','t','i','o','n','s', ' ','e','n','g','i','n','e','e','r','.']
   const jobArray  = [ 'w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

   useEffect (() => {
      setTimeout(()=>{
         return setLetterClass('text-animate-hover')
      }, 4000)
   }, [])

   return (
      <>
      <div className="container home-page">
         <div className="text-zone">
            <h1 className='responsive-test'>
               <span className='before-text'>&lt;h1&gt;</span>
               <span className={letterClass}>H</span>
               <span className={`${letterClass} _12`}>i,</span>  
            <br/> 
               <span className={`${letterClass} _13`}>I</span>
               <span className={`${letterClass} _14`}>'m </span>
               <span className='spacer'> </span>   
               <span className={`${letterClass} _15`}>K</span>  
               <span className={`${letterClass} _16`}>e</span>  
               <span className={`${letterClass} _17`}>v</span>  
               <span className={`${letterClass} _18`}>i</span>  
               <span className={`${letterClass} _19`}>n </span>
               <span className='spacer'> </span>  
               <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
                  strArray={nameArray}
                  idx={20}/>
            <br />
            <AnimatedLetters letterClass={letterClass}
                  strArray={jobArray}
                  idx={26}/>
            <br />
               <span className='after-text'>&lt;/h1&gt;</span>
            </h1>
            <h2>Frontend Developer / Pizza Aficionado </h2>
            <Link to="/contact" className="flat-button">
               CONTACT ME
            </Link>
         
         </div>
         <Logo />
         {/* <img className='home-graphic' src={HomeGraphic} alt="abstract design" /> */}
      </div>
      <Loader type="line-scale-pulse-out"/>
      </>
   )

}

export default Home;