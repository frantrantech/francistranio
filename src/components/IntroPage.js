import '../styling/IntroPage.css'
import { useEffect, useRef } from 'react'
import SoftwareEngineer from './SoftwareEngineer';
import { TypeAnimation } from 'react-type-animation';
import anime from 'animejs/lib/anime.es.js';

function IntroPage() {

  useEffect(() => {

    anime({
      targets: '.outline',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    });

    anime({
      targets: '.circles',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    });

  }, []);

  return (
    <div className="background-container">
      <section id="home-section"> 
      {/* <img src="firstscreen.png" className="background-image" alt="Background" /> */}
      <div className="background-image"> </div>

      <div className="terminal-wrapper"> 

        {/* Start Terminal Svg  */}
        {/* General animation strategy:
           set opacity fill for all elems to .9 -> begin animation to go from opacity 0 -> 0.9
           Animejs Outline is #e5e5e5 (for visibility) 
           Circle outline*/}
          <svg width="100%" height="100%" viewBox="-1 -1 1003 502" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="outline animate-opacity-and-black-stroke-from-mercury " d="M0 35C0 15.67 15.67 0 35 0h931c19.33 0 35 15.67 35 35v16H0V35Z" fill="#E5E5E5" stroke="#e5e5e5"/>
            <path className="outline animate-opacity-and-black-stroke-from-gray" d="M0 51h1001v414c0 19.33-15.67 35-35 35H35c-19.33 0-35-15.67-35-35V51Z" fill="#A0A09F" stroke="#A0A09F"/>

            <path className="circles animate-opacity-circles" fill="#EC5800" stroke="#EC5800" d="M32.5 29.5a11 11 0 1 0 22 0 11 11 0 1 0-22 0"/>
            <path className="circles animate-opacity-circles" fill="#F4C430" stroke="#F4C430" d="M71.5 29.5a11 11 0 1 0 22 0 11 11 0 1 0-22 0"/>
            <path className="circles animate-opacity-circles" fill="#0BDA51" stroke="#0BDA51" d="M110.5 29.5a11 11 0 1 0 22 0 11 11 0 1 0-22 0"/>
          </svg>

         {/* End Terminal Svg*/}

        <TypeAnimation
          className='introduction'
          sequence={[
            '', // Initial Delay setting
            2500,
            '$ Welcome to my portfolio, I\'m Francis Tran, a',
            1000,
            () => {}
          ]}
          wrapper="div"
          cursor={false}
          speed={10}/>

      <div className = "software-engineer-animation">
        < SoftwareEngineer />
      </div>
   
      </div>
      </section>
    </div>
  );
}

export default IntroPage;
