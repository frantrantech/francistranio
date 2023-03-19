import './App.css';
import './IntroPage.css'
import { useEffect, useRef } from 'react'
import SoftwareEngineer from './SoftwareEngineer';
import { TypeAnimation } from 'react-type-animation';
import anime from 'animejs/lib/anime.es.js';

function IntroPage() {
  const pathRefs = useRef([]);

  useEffect(() => {
    // const paths = pathRefs.current;
    // const animation = anime.timeline();

    // paths.forEach((path) => {
    //   const length = path.getTotalLength();

    //   // Set the initial stroke dash offset to the length of the path
    //   path.style.strokeDashoffset = length;

    //   // Add the path to the animation timeline
    //   animation.add({
    //     targets: path,
    //     strokeDashoffset: [length, 0],
    //     duration: 2000,
    //     easing: 'easeInOutSine'
    //   });
    // });

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
      <img src="firstscreen.png" className="background-image" alt="Background" />

      <div className="terminal-wrapper"> 

        {/* Start Terminal Svg
           */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1004.5 533.99" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                <path className="outline" transform="scale(1.00215 1.0381)" fill="#e5e5e5" stroke="#da14ff" d="M37 0h928.348s37 0 37 37v440.386s0 37-37 37H37s-37 0-37-37V37S0 0 37 0"/>
            
                {/* <path className="terminal-body" fill="#6f6f92" stroke="#000000" d="M0 51.256h1004.502v350.265H0Z"/>
                <path className="terminal-body" fill="#6f6f92" stroke="#" d="M35 167.256h934.502s35 0 35 35v296.826s0 35-35 35H35s-35 0-35-35V202.256s0-35 35-35"/> 
            
                <path className="circles"fill="#ec5800" stroke="#000000" d="M27.085 29.907a11.904 11.29 0 1 0 23.807 0 11.904 11.29 0 1 0-23.807 0"/>
                <path className="circles" fill="#f4c430" stroke="#000000" d="M59.911 29.907a11.904 11.29 0 1 0 23.806 0 11.904 11.29 0 1 0-23.806 0"/>
                <path className="circles" fill="#0bda51" stroke="#000000" d="M90.582 29.907a11.904 11.29 0 1 0 23.806 0 11.904 11.29 0 1 0-23.806 0"/> 
              </svg> */}
             
        <img src ="terminal.svg" /> 



         {/* End Terminal Svg*/}

        <TypeAnimation
          className='introduction'
          sequence={[
            '', // Initial Delay setting
            5000,
            '$ Welcome to my portfolio, I\'m Francis Tran, a',
            1000,
            () => {}
          ]}
          wrapper="div"
          cursor={false}
          speed={5}/>

      <div className = "software-engineer-animation">
        < SoftwareEngineer />
      </div>
   
      </div>
    </div>
  );
}

export default IntroPage;
