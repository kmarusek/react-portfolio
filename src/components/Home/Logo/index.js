import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';
import { useEffect, useRef } from 'react';
import LogoM from '../../../assets/images/logo-m-blue.png';
import './logo.scss';

const Logo = () => {

   const bgRef = useRef();
   const outlineLogoRef = useRef();
   const solidLogoRef= useRef();

   useEffect(() => {
      gsap.registerPlugin(DrawSVGPlugin)

      gsap.timeline()
      .to(bgRef.current, {
         duration: 1,
         opacity : 1,
      })
      .from(outlineLogoRef.current, {
         drawSVG: 0,
         duration: 12,
      })

      gsap.fromTo(
         solidLogoRef.current,
         {
            opacity: 0,
         },
         {
            opacity: 1,
            delay: 7,
            duration: 2,
         }

      )
   }, [])
   return (
      <div className='logo-container' ref={bgRef}>
         <img ref={solidLogoRef} className='solid-logo' src={LogoM} alt='M' />
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="744px" 
            height="729px"
            viewBox="0 0 744 729">
         <g
            className='svg-container'
            fill="none"   
         >
        <path 
          id="logo-m-line"
          ref={outlineLogoRef}
          d="M 57.00,716.00
           C 57.00,716.00 15.00,715.50 15.00,715.50
             15.00,715.50 15.50,22.00 15.50,22.00
             15.50,22.00 57.50,22.00 57.50,22.00M 555.50,333.50
           C 555.50,333.50 555.00,715.50 555.00,715.50
             555.00,715.50 597.50,716.50 597.50,716.50M 371.00,413.00
           C 371.00,413.00 474.00,22.00 474.00,22.00
             474.00,22.00 516.50,22.50 516.50,22.50M 187.00,339.50
           C 187.00,339.50 281.00,716.50 281.00,716.50
             281.00,716.50 326.50,716.50 326.50,716.50M 58.33,22.00
           C 58.33,22.00 268.67,22.33 268.67,22.33
             268.67,22.33 393.00,495.33 393.00,495.33
             393.00,495.33 517.00,23.00 517.00,23.00
             517.00,23.00 729.00,22.67 729.00,22.67
             729.00,22.67 729.00,716.67 729.00,716.67
             729.00,716.67 598.33,716.67 598.33,716.67
             598.33,716.67 598.33,170.67 598.33,170.67
             598.33,170.67 459.33,716.33 459.33,716.33
             459.33,716.33 326.00,716.67 326.00,716.67
             326.00,716.67 189.67,174.00 189.67,174.00
             189.67,174.00 188.33,717.00 188.33,717.00
             188.33,717.00 58.00,716.00 58.00,716.00
             58.00,716.00 58.33,22.00 58.33,22.00 Z" />
             </g>
          </svg>

      </div>
   )

}

export default Logo;